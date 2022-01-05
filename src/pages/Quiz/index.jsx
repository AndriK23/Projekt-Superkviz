import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Question from '../Question';
import Evaluation from '../Evaluation';

const Quiz = () => {

    const {id} = useParams();
    
    //const [questionNum, setQuestionNum] = useState(0);
    
    const [questions, setQuestions] = useState(undefined);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [loading, setLoading] = useState(true);
    const [answers,setAnswers] = useState([]);

    useEffect(
        () => {
          fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
          .then(response => response.json())
          .then (json => {
              console.log(json);
              setQuestions(json.questions);
              setLoading(false);
              
          })
  
        }, 
        []
    )


    const handleAnswer = (answer) => {
        //console.log(answer);
        setAnswers([...answers,answer]);
        setActiveQuestion(activeQuestion + 1);
    }


    if (loading === true) {
        return <p> nacitam data kvizu </p>
    }

    if(activeQuestion === questions.length){
        return(
            <Evaluation
            questions = {questions}
            answers = {answers}
            />
        )
    }


    return(

    <Question 
        questionNumber = {activeQuestion + 1} 
        questionsCount = { questions.length} 
        title = {questions[activeQuestion].title} 
        answers= {questions[activeQuestion].answers}
        image = {questions[activeQuestion].image}
        handleAnswer = {handleAnswer}
    />
        

    )
}

export default Quiz;



//{JSON.stringify(questions)}

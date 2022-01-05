import React from 'react';

const Question = ({questionNumber, questionsCount, title, image, answers , handleAnswer}) => {

   

    return(
       
        <div className="question">

        <p className="question__number">Otázka {questionNumber}/ {questionsCount} </p>
        {/*<p> {id} </p>*/}
        <h2 className="question__title"> {title} </h2>
        <div className="question__content">
        <img className="question__image" src={image} alt="Ilustrační obrázek"/>

        <div className="question__answers">

            {
           answers.map( (answer,index) => (
                <button onClick = {() => {handleAnswer(index)}} className="question__answer" key = {`answer${index}`}> {answer}</button>
            ))
            }

            
        </div>
        </div>       

        </div>
      

    )
}

export default Question;
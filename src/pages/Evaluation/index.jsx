import React from 'react';
import incorrectImg from '../../assets/incorrect.svg';
import correctImg from '../../assets/correct.svg';

const Evaluation = ( {questions, answers}) => {

let correctAnswers = 0;

questions.forEach((question,index) => {
    if (answers[index] !== question.correctAnswer) {
        correctAnswers++;
    }
})

    return(
       
        <div className="evaluation">

            <h2 className="evaluation__title">Tvoje hodnocení</h2>

                <div className="evaluation__content">
            
                    <div className="results">


                        {questions.map((question,index) => {
                            return(
                            <div className="result" key = {question.id}>
                                    <img className="result__icon" src={ answers[index] === question.correctAnswer ? correctImg : incorrectImg} alt="špatně"/>

                                    <div className="result__content">
                                        <h3 className="result__title"> {index + 1 } {question.title} </h3>
                                        <p className="result__answer">Tvoje odpověď: {question.answers[answers[index]]}</p>
                                        {/*answer.index je moje odpoved na otazku s cislem index*/}
                                        {/*question.correctAnswer je jaka ma byt odpoved*/}
                                        { answers[index] !== question.correctAnswer && 
                                        <p className="result__answer result__answer--correct">Správná odpověď: {question.answers[question.correctAnswer]}</p>
                                        }
                                    </div>
                            </div>
                            )

                        } )}
                    
                        <div className="results__count">
                            Správně máš {correctAnswers} ze {questions.length} otázek.
                        </div>

				

                   
					</div>

                        <div className="success-rate">
					        { Math.round(correctAnswers * 100/questions.length) } %
				        </div>
                
            </div>     
                

        </div>
      
    )
}

export default Evaluation;
import React from 'react';
import snehurka from '../../assets/snehurka.jpg';

const Quiz = () => {
    return(
    <main className="main">


    <div className="question">

        <p className="question__number">Otázka 1 / 5</p>

        <h2 className="question__title">Zrcadlo, kdo je na světě nejkrásnější?</h2>

        <div className="question__content">
            <img className="question__image" src={snehurka} alt="Ilustrační obrázek"/>

            <div className="question__answers">
                <button className="question__answer">Ledová královna</button>
                <button className="question__answer">Sněhurka</button>
                <button className="question__answer">Já! Já jsem nejkrásnější.</button>
            </div>
        </div>

    </div>


    </main>
    )
}

export default Quiz;
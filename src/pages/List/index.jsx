import React, { useEffect, useState } from 'react';
import moncicak from '../../assets/moncicak.jpg';
import snehurka from '../../assets/snehurka.jpg';
import pivo from '../../assets/pivo.jpg';

const List = ({data}) => {
    return (

<main className="main">


<div className="quiz-list">
    {data.map( (item) => {return (<div className="quiz-item" key={item.id}>
        <img className="quiz-item__image" src={item.image} alt="Mončičák"/>
        <div className="quiz-item__content">
            <h2 className="quiz-item__title"> {item.title}</h2>
            <p className="quiz-item__questions">{item.questions} otázek</p>
            <a className="quiz-item__link" href="#">Spustit kvíz</a>
        </div>
    </div>)})}

   

</div>




</main>

    )
};

export default List;


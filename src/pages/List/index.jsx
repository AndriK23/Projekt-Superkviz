import React from 'react';
import { Link } from 'react-router-dom';



const List = ({data}) => {

//const {id} = useParams();

  

return (

<main className="main">


<div className="quiz-list">
    {data.map( (item) => {return (
        <div className="quiz-item" key={item.id}>
        <img className="quiz-item__image" src={item.image} alt="Mončičák"/>
        <div className="quiz-item__content">
            <h2 className="quiz-item__title"> {item.title}</h2>
            <p className="quiz-item__questions">{item.questions} otázek</p>
            <Link to={`/list/1`} className="quiz-item__link" >
            Spustit kvíz
            </Link>
            
        </div>
    </div>)})}

   

</div>




</main>

    )
};

export default List;


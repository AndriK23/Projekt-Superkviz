import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import List from './pages/List';
import Evaluation from './pages/Evaluation';
import Quiz from './pages/Quiz';
import Chart from './pages/Chart';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () =>{
 
  const [data,setData] = useState([]);
  //const [qdata,setQdata] = useState([]);
  
  
  useEffect(() => {
    fetch(
        `https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          /*console.log(data);*/
        });
},[] );


  return (
  
  <>

<BrowserRouter>
<Header/>
<main className="main">
  <Routes> 
    <Route path="/" element = {<Intro/> }/>
    <Route path="/list" element = {<List data={data} /> }/>
    <Route path="/list/:id" element={ <Quiz /> } />
    <Route path="/chart" element = {<Chart/> }/>
  </Routes>
</main>
</BrowserRouter>



{/*<Results/>
<Quiz/> */}

<Footer/>

  </>
);}

render(<App />, document.querySelector('#app'));

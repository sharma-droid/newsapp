
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function App() {


  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

    useEffect(()=>{

      fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-03-09&apiKey=8037d5c8a19e4d84809f0a5daec76dfc`)
      .then((Response)=>Response.json())
      .then((News)=>{
      setArticles(News.articles);
      console.log(News.articles);
    })
    .catch((err)=>{
      console.log(err)
    })

    },[category])



  return (
    <div className="App">
   
    <header className='header'>

      <h1>Parso Tak</h1>

      <input type='text' onChange={(Event)=>{
        if(Event.target.value!=="")
        {
        setCategory(Event.target.value);
        }
        else{
          setCategory("india")
        }
      }} placeholder='Search News'/>

    </header>

      <section className='news-articles'>
        
        
        {
          articles.map((article)=>{
            return (
            <News article = {article}/>
            )
          })
        }
        
   

     
      </section>

    </div>
  );
}

export default App;

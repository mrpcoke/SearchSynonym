/* eslint-disable no-unused-vars */

/*
This React App connects to a Datamuse API 
and retrieves all of the synonyms for a 
specific word.
App written by Paul Coke (c)2023
*/
import { useState } from 'react'
import './App.css'


function App() {

  /*
    Initialise states for setting the word 
    selection and the set of synonyms that 
    are returned from the API 
  */
  const [word, setWord] = useState("");
  const [synonym, setSynonym] = useState([]);

  const url = `https://api.datamuse.com/words?rel_syn=${word}`;

/*
Initialise function to connect to 
API and retrieve information in JSON format
*/
const searchHandler = (e) => {

    e.preventDefault(); 

    fetch(url)
    .then(res => res.json())
    .then((data)=>{

      //console.log(data);
      setSynonym(data);
    }).catch((err)=>{

      console.log(err);
    })
   

}

  return (
    
    <div>
      <form onSubmit={searchHandler}> 
        <input type="text" name="txtSearch" id="txtSearch" onChange={(event)=> setWord(event.target.value)} required placeholder="Search Word"/>
        <button type="submit" name="submit" id="btnSubmit">Search</button>
      </form>
    
        {synonym.map((item,key)=>{
       
       return <h4 key={key}>{item.word}</h4>

      })}
     
    </div>
  )
}

export default App

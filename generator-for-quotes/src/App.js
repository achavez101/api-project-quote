import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
import './App.css';
import './Quote.css';
import axios from "axios";


const App = () => {
 //useState to set quote
 const [quote, setQuote] = useState("");
 //useState to set author
 const [author, setAuthor] = useState("");


 //quote API addition
 // async usage for callback function
 const setAPI = async () => {
   let quoteArray = [];


   try {
     //awaiting api
     const data = await axios.get("https://api.quotable.io/random");
     quoteArray = data.data;
   } catch(error) {
     console.log(error);
   }


   try {
     setQuote(quoteArray.content)
     setAuthor(quoteArray.author)
   }
   catch (error) {
     console.log(error);
   }
 };


 //useEffect to callback for the quote
 useEffect(() => {
   setAPI();
 }, []);


 return (
   <div className="App">
     <div className = "boxQuote">
       <div className = "container">
         <div className = "quote"><h3>{quote}</h3></div>
         <div className = "author">- {author}</div>
         <div className = "buttonQuote"><button onClick={setAPI}>Generate Next Quote</button></div>
       </div>
     </div>
   </div>
 );
};


export default App;


// next idea
// quote generator with categories


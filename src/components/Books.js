// react
import React,{useState} from "react";
// Own Css 
import "./Books.css";
//import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Header from "./Header";

 function Books() {
// react Hook For State Handler
  const [data , setData]=useState(null)

// Fetch Function   
  fetch("./data/db.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )
  function rent()
  {
    alert("Book Rented Successfully")
  }

  return (
      <>
     
    <div className="App">
    <Header/>
      <h1>BOOK LIST</h1>
      
      {
        
        // use data State Variable For Get Data Use JavaScript Map Mathod
      
                   
                    data?
                    <div>
                    <table className="table">
    <thead>
      <tr>
        <th> Book No</th>
        <th> Book Name</th>
        <th> Book Author</th>
        <th> Rent Cost</th>
        <th>Available Copies</th>
        <th>ISBN No</th>
        <th>Click to Rent</th>
      </tr>
      </thead>
      <tbody>
      {data.map(
          (data,i)=>
      <tr>
        <td>{data.id}</td>
        <td>{data.name} </td>
        <td>{data.Author} </td>
        <td>{data.Cost}</td>
        <td>{data.Copies}</td>
        <td> {data.ISBN}</td>
        <button onClick={rent} className="btn btn-primary">Rent Now</button>
      </tr>
   )}
      </tbody>
  </table>
  </div>
    
        :<p>Please Wait</p>
          }
    </div>
    </>
  );
}
      
export default Books;
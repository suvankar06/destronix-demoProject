import React, { Component } from 'react';
import './Search.css'

import Data from '../db.json';
import Header from './Header';


class Search extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    
    const items = Data.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())
       || data.Author.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
        <>
        <Header/>
        
      <div className='line'>
        <ul>
          <li  >
            <span className='styleInfo'>{data.name}</span>
            <span className='styleInfo'>{data.Author}</span>
            <span className='styleInfo'>{data.Cost}</span>
          </li>
        </ul>
      </div>
      </>
      )
    })

    return (
      <div>
        <div className='heading'><h1>Search Your Books Here</h1></div>

      
      <div className='input'>
      <input type="text" placeholder="Enter item to be searched" className='elementStyle' onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
      </div>
    )
  }
}

export default Search;
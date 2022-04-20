import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    function color(props, bColor, Csize) {
      props.target.style["background-color"]= bColor;
      props.target.style["width"]=Csize;
      props.target.style["height"]=Csize;
    }
    return(
      <div className='container'>
        <div className='header'>
          <h1>EventListener</h1>
        </div>
        <div className='subContainer'>
          <h2>Magic Circle</h2>
          <div className='magic-circle' 
          onClick={(e, bColor, Csize)=>color(e, "red", "100px")} 
          onDoubleClick={(e, bColor, Csize)=>color(e, "green", "600px")} 
          onMouseEnter={(e, bColor, Csize)=>color(e, "yellow","500px")}
          onMouseLeave={(e, bColor, Csize)=>color(e, "black","400px")}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

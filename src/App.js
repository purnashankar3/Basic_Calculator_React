import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Keypad.css';

import Keypad from "./Keypad"
import Result from "./Result"

class App extends Component {

    constructor(){
      super();
      this.state={
        result:""
      }
    }
 onClick=button=>{
   if(button=== "C"){
     this.clear()
   }
   else if(button==="="){
      this.calculate()
      
   }

  else{
      this.setState({result:this.state.result+button})
  }
}

 
 clear=()=>{
   this.setState({result:""})
 }

 calculate=()=>{
   try{
   this.setState({result:eval(this.state.result)})
   }
   catch{
     this.setState({result:"error"})
   }
 }

    render(){
       return (
          <div className="cal-body">
            <p><h1>Basic Calculator</h1></p>
           <Result result={this.state.result}/>
           <Keypad onClick={this.onClick}/>
          </div>
  );
}
}

export default App;

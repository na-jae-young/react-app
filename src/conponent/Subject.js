
import React, {Component}from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            alert('hi')
            e.preventDefault(); // reload 안되게 막아줌 
            //기본적으로 작동하던것들을 작동하지 않게 막아주는 함수 
          }}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }

  

  export default Subject;

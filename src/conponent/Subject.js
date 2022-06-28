
import React, {Component}from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);//이벤트를 위한 객체 e가 자동으로 만들어진다.
            //alert('hi')
            e.preventDefault(); // 이벤트 객체 e가 실행될때 reload 안되게 막아줌 
            //이벤트 객체 e가 실행될때 기본적으로 작동하던것들을 작동하지 않게 막아주는 함수
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }

  

  export default Subject;

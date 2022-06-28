//import logo from './logo.svg';

import React, {Component}from 'react';
import './App.css';
import Content from './conponent/Content';
import Toc from './conponent/Toc';
import Subject from './conponent/Subject';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      subject:{title:'web', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'hello react'},
      contents:[
        {id:1,title:'html', desc:'html is ...'},
        {id:2,title:'css', desc:'css is ....'},
        {id:3, title:'js',desc:'js is ....'}
      ]
    } //state 초기화
      //stte가 바뀌면 render()함수가 모두 다시 실행된다. 
  }
  render(){
    let _title , _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return(
      <div className="App">
        HELLO WORLD
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Toc data ={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}


export default App;

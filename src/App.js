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
      subject:{title:'web', sub:'world wide web!'},
      content:[
        {id:1,title:'html', desc:'html is ...'},
        {id:2,title:'css', desc:'css is ....'},
        {id:3, title:'js',desc:'js is ....'}
      ]
    } //state 초기화

  }
  render(){
    return(
      <div className="App">
        HELLO WORLD
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} >
        </Subject>
        <Toc></Toc>
        <Content title="html" desc="html is ....."></Content>
      </div>
    );
  }
}


export default App;

//import logo from './logo.svg';

import React, {Component}from 'react';
import './App.css';
import Content from './conponent/Content';
import Toc from './conponent/Toc';
import Subject from './conponent/Subject';


class App extends Component{
  render(){
    return(
      <div className="App">
        HELLO WORLD
        <Subject title="WEB" sub="world wide web!" ></Subject>
        <Toc></Toc>
        <Content title="html" desc="html is ....."></Content>
      </div>
    );
  }
}


export default App;

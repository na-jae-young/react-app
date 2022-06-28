//import logo from './logo.svg';

import React, {Component}from 'react';
import './App.css';
import ReadContent from './conponent/ReadContent';
import CreateContent from './conponent/CreateContent';
import Toc from './conponent/Toc';
import Subject from './conponent/Subject';
import Control from './conponent/Control';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      selected_id:1,
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
    let _title , _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
      let i = 0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_id){
          _title = data.title
          _desc = data.desc
          break
        }
        i = i+1
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if ( this.state.mode === "create"){
      _article = <CreateContent></CreateContent>
    }
 
    return(
      <div className="App">
        HELLO WORLD
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            alert('hihihihi');
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}>
        </Subject>
        <Toc 
          data ={this.state.contents}
          onChangePage={function(id){
            this.setState({mode:'read'})
            this.setState({selected_id:Number(id)})
          }.bind(this)}>
        </Toc>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}


export default App;

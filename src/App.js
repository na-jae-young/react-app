//import logo from './logo.svg';

import React, {Component}from 'react';
import './App.css';
import ReadContent from './conponent/ReadContent';
import CreateContent from './conponent/CreateContent';
import Toc from './conponent/Toc';
import Subject from './conponent/Subject';
import Control from './conponent/Control';
import UpdateContent from './conponent/UpdateContent';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
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

  getReadContent(){
    let i = 0;
    while(i<this.state.contents.length){
      let data = this.state.contents[i];
      if(data.id === this.state.selected_id){
        return data
      }
      i = i+1
    }
  }

  getContent(){
    let _title , _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      const readcontent = this.getReadContent()
      _article = <ReadContent title={readcontent.title} desc={readcontent.desc}></ReadContent>
    }
    else if ( this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title,_desc){
        
        this.max_content_id = this.max_content_id + 1;
        /*
        this.state.contents.push(
          {id:this.max_content_id, title:_title , desc:_desc}
        );
        this.setState({contents:this.state.contents})
          //push 로 값 바꾸고 setState()로 state 변경 */
        const _content = this.state.contents.concat(
          {id:this.max_content_id, title:_title , desc:_desc})
        this.setState({contents:_content})
      }.bind(this)}></CreateContent>
    }
    else if ( this.state.mode === "update"){
      let _content = this.getReadContent()
      _article = <UpdateContent data= {_content} onSubmit={
        function(_id,_title,_desc){
          let _contents = Array.from(this.state.contents)
          let i = 0
          while(i < _contents.length){
            if(_contents[i].id ===_id){
              _contents[i] = {id:_id, title:_title ,desc:_desc}
              break
            }
            i= i+1
          }
        this.setState({contents:_contents})
      }.bind(this)}></UpdateContent>
    }
    return _article
 
  }

  render(){
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
        {this.getContent()}
      </div>
    );
  }
}


export default App;

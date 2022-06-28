import React, {Component}from 'react';

class Toc extends Component{

    shouldComponentUpdate(newProps, newState){
      if(this.props.data === newProps.data){
        return false
      }
      return true
    }// state 값의 변화가 있을때만 render()함수가 실행되도록 
    render(){
        console.log('start')
        const data = this.props.data;
        let lists=[];
        let i = 0;
        while(i<data.length){
            lists.push(
              <li key={data[i].id}>
                <a 
                  href={"/content/"+data[i].id}
                  data-id ={data[i].id}
                  onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id)
                  }.bind(this)}
                  >{data[i].title}
                </a>
              </li>) 
            i= i+1
        }
      return( 
        <nav>
            <ul>
              {lists}
            </ul>
        </nav>
      )
    }
  }


export default Toc;
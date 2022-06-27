import React, {Component}from 'react';

class Toc extends Component{
    render(){
        const data = this.props.data;
        let lists=[];
        let i = 0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>) 
            i= i+1
        }
      return( 
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.css">CSS</a></li>
                <li><a href="3.JS">JS</a></li>
            </ul>
        </nav>
      )
    }
  }


export default Toc;
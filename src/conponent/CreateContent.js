import React, {Component}from 'react';

class ControlContent  extends Component{
    render(){
      return(
        <article>
            <h2>Create</h2>
            <form action='/create_process' method='post'
                onSubmit={function(e){
                    e.preventDefault()
                    alert('submit!!!!')
                }.bind(this)}>
                <p><input type="text" name="title" placeholder='title'></input></p>
                <p><input type="textarea" name="desc" placeholder='description'></input></p>
                <p><input type="submit" ></input></p>
            </form>
        </article>
      )
    }
  }

  export default ControlContent;

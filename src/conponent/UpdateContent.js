import React, {Component}from 'react';

class UpdateContent  extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:this.props.data.title,
            desc:this.props.data.desc
        } // props는 readonly이기 때문에 수정이 불가하므로 conponent내부에 state화 시켜준후 사용한다.
        this.inputFormHandler = this.inputFormHandler.bind(this)
    }

    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        const read_content = this.props.data //이런식으로 갖어와서 사용하면 readonly 
      return(
        <article>
            <h2>Update</h2>
            <form action='/Update_process' method='post'
                onSubmit={function(e){
                    e.preventDefault()
                    alert('submit!!!!')
                    this.props.onSubmit(
                      e.target.title.value,
                      e.target.desc.value
                    )
                }.bind(this)}>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder='title' 
                        value={this.state.title}
                        onChange={this.inputFormHandler}>
                    </input>
                </p>
                <p>
                    <input 
                        type="textarea" 
                        name="desc" 
                        placeholder='description' 
                        value={this.state.desc}
                        onChange={this.inputFormHandler}> 
                    </input>
                </p>
                <p><input type="submit" ></input></p>
            </form>
        </article>
      )
    }
  }

  export default UpdateContent;

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const category = this.category.value;
    const title = this.title.value;
    const content = this.content.value;
    this.props.publishPost({category, title, content});
  }

  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>分类</label>
          <input  ref={(input) => this.category = input }  defaultValue={this.props.post ? this.props.post.category : ''}/>
        </div>
        <div>
          <label>标题</label>
          <input  ref={(input) => this.title = input }  defaultValue={this.props.post ? this.props.post.title : ''}/>
        </div>
        <div>
          <label>内容</label>
          <textarea ref={(input) => this.content = input } rows='20'   defaultValue={this.props.post ? this.props.post.content : ''}/>
        </div>
        <div className="actions">
          <button type='submit' key='2'>{this.props.label}</button>
          <Link className="link" to='/'>取消</Link>
        </div>
      </form>
      </div>
    )
  }
}
export default Form

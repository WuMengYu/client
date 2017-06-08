import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import Settings from '../Settings'

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentWillMount() {
    axios.get(`${Settings.host}/post/${this.props.match.params.id}`).then(res => {
      this.setState({
        post: res.data.post
      })
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log(error.message);
      }
    });
  }

  publishPost(data) {
    axios.put(`${Settings.host}/post/${this.props.match.params.id}`, data)
    .then(res => {
      console.log(res.data.message);
      this.props.history.push('/');
    })
  }

  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>修改文章</div>
        {
        Object.keys(this.state.post).length !== 0 ? <Form label='更新文章' publishPost={this.publishPost.bind(this)} post={this.state.post} /> : ''
        }
      </div>
    )
  }
}

export default EditPost

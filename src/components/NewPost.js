import React from 'react'
import Form from './Form'
import axios from 'axios'
import Settings from '../Settings'

  const NewPost = (props) => {
    const publishPost = (data) => {
      axios.post(`${Settings.host}/post`, data)
      .then(res => {
        console.log(res.data.message)
          console.log(res)
        props.history.push('/')
      })
    }


    return(
      <div>

        <div className="content"></div>
        <div className="title">写文章</div>
        <Form publishPost={publishPost} label='发布文章' />
      </div>
    )
  }


export default NewPost

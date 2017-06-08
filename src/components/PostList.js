import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/App.css'
import Settings from '../Settings'
import DeletePost from './DeletePost'

const styles = {
   button: {
     display: 'block',
     margin: '30px auto',
     width: '120px',
     height: '36px',
     lineHeight: '36px',
     textAlign: 'center',
     backgroundColor: '#ff4081',
     fontSize: '1em',
     color: '#fff',
     textDecoration: 'none',
     borderRadius: '20px'
   },
   content: {
     position: 'relative',
     width: '100%',
     height: '60px',
     maxWidth: '600px',
     margin: '20px auto',
     backgroundColor: '#fff',
     borderRadius: '5px',
     padding: '16px',
     boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
   },
   title: {
     fontSize: '1.2em'
   },
   actions: {
     position: 'absolute',
     bottom: '16px',
     right: '16px'
   },
   link: {
     display: 'inline-block',
     fontSize: '.9em',
     color: '#00bcd4',
     opacity: '.8',
     textDecoration: 'none',
     paddingLeft: '10px',
     paddingRight: '10px'
   }
 }
class PostList extends React.Component{
  constructor(){
    super();
    this.state = {
      posts:[],
      id: ''
    }
  }
  filterPosts(id) {
    const posts = this.state.posts.filter((post) => post._id !== id )

    this.setState({ posts: posts })
  }

  handleClick(value) {
    this.setState({id: value});
    this.refs.dialog.handleOpen();
  }
  componentDidMount(){

    axios.get(`${Settings.host}/posts`)
    .then(res => {
      console.log(res.data.posts)
      this.setState({
        posts:res.data.posts
      })
    })
  }
  render(){
    const postList = this.state.posts.map(post => (
          <div style={styles.content} key={post._id}>
            <div style={styles.title}>{post.title}</div>
            <div style={styles.actions}>
              <Link to={`/post/${post._id}`} style={styles.link}>查看</Link>
              <Link to={`/post/${post._id}/edit`} style={styles.link}>编辑</Link>
              <Link to='' style={styles.link} onClick={this.handleClick.bind(this, post._id)}>删除</Link>
            </div>
          </div>
        ))
    return(
      <div>
        <Link style={styles.button} to='/post/new'>写文章</Link>
        { postList }
        <DeletePost id={this.state.id} removePosts={this.filterPosts.bind(this)} ref='dialog' />
      </div>
    )
  }
}
export default PostList

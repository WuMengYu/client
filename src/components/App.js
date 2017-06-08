import React, { Component } from 'react'
import Header from './Header.js'
import PostList from './PostList'
import NewPost from './NewPost'
import EditPost from './EditPost'
import ShowPost from './ShowPost'
import '../css/App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div>
          <Router>
             <div>
               <Header />
               <Route exact path='/' component={PostList}  />
               <Route path='/post/new' component={NewPost} />
               <Route exact path='/post/:id' component={ShowPost} />
               <Route path='/post/:id/edit' component={EditPost} />
             </div>
          </Router>

      </div>
    )
  }
}

export default App;

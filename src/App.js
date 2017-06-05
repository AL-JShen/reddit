import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Header from './Components/Header';
import RenderPosts from './Components/RenderPosts';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tempsub: null,
      sub: null,
      posts: [],
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTop = this.handleTop.bind(this);
  }
  
  getPosts() {
    const promise = axios.get(`https://www.reddit.com/r/${this.state.sub}/.json?limit=50`);
    promise.then((response) => {
      this.setState({
        posts: response.data.data.children
      });
    });
  }

  handleSub(event) {
    this.setState({
      tempsub: event.target.value,
    });
  }
  
  // resetInput() {
  //   document.getElementById("inputSub").value=null;
  // }
  
  handleChange() {
    this.setState({
      sub: this.state.tempsub,
    });
    // this.resetInput();
    setTimeout(() => { this.getPosts() }, 5);
  }
  
  handleTop() {
    const promise = axios.get(`https://www.reddit.com/r/${this.state.sub}/top/.json?sort=top&t=all&limit=50`);
    promise.then((response) => {
      this.setState({
        posts: response.data.data.children
      });
    });
  }
  
  componentWillMount() {
    this.setState({
      sub: 'all',
    });
    setTimeout(() => { this.getPosts() }, 5);
  }
  
  render() {
    return (
      <div className="App">
        <Title />
        <Header handleSub={this.handleSub} handleChange={this.handleChange} handleTop={this.handleTop} sub={this.state.sub}/>
        <RenderPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

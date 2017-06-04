import React, { Component } from 'react';
import Card from './Cards/Card';
// import axios from 'axios';


class RenderPosts extends Component {

  render() {

    const Posts = this.props.posts;
    const RenderFinal = Posts.map((_post, index) => {
      const post = _post.data;
      
      let showMedia = null;
      if (post.preview) {
          if (post.domain === "gfycat.com") {
            // let source = post.url.substring(19);
            // const promise = axios.get(`http://cors-anywhere.herokuapp.com/https://gfycat.com/cajax/get/${source}`);
            // promise.then((response) => {
            //   showMedia = <div id="postMedia"><img src={response.data.gfyItem.gifUrl}/></div>
            // })
            // Code above works but the timing is off, so the component loads before getting the right data.
            
            // const source = post.url.substring(8);
            // showMedia = (<div id="postMedia"><img src={`https://thumbs.${source}-size_restricted.gif`} /></div>)
            // This uses gfycat's small gif format. Resolution is not as good but it supports more gifs
          
            const source = post.url.replace('gfycat.com', 'gfycat.com/ifr')
            showMedia = (<div className="wrapper"><iframe width="100%" height="auto" src={source} frameborder="0" allowfullscreen></iframe></div>)
            
          } else if (post.url.substr(post.url.length - 4) === "gifv") {
              const source = post.url.replace('gifv', 'mp4');
              showMedia = (<div id="postMedia"><video preload autoPlay loop src={source}/></div>);      
              // Not all links with gifv work. Don't know why.
          } else if ((post.domain === "imgur.com") && (post.url.slice(-4) !== '.jpg')) {
            const source = post.url + '.jpg';
            showMedia = (<div id="postMedia"><img src={source}/></div>);
          } else {
              showMedia = (<div id="postMedia"><img src={post.url}/></div>);
            }
        }
      
      return (
        <div key={index} className="post">
          <Card post={post} showMedia={showMedia} />      
        </div>
      )
    });
    
    return (
      <div className="body">
        { RenderFinal }
      </div>
    )
  }
}

export default RenderPosts;
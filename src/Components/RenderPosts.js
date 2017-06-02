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
        if (post.preview.enabled === true) {
          if (post.domain === "gfycat.com") {
              // let source = post.url.substring(19);
              // const promise = axios.get(`http://cors-anywhere.herokuapp.com/https://gfycat.com/cajax/get/${source}`);
              // promise.then((response) => {
              //   showMedia = <div id="postMedia"><img src={response.data.gfyItem.gifUrl}/></div>
              // })
              // Code above works but the timing is off, so the component loads before getting the right data.
            let source = post.url.substring(8);
            showMedia = (<div id="postMedia"><img src={`https://giant.${source}.gif`} /></div>)
            // This solution doesnt work for gfycat links that are short and use fat.gfycat instead
          
          } else if (post.url.substr(post.url.length - 4) === "gifv") {
              const source = post.url.replace('gifv', 'mp4');
              showMedia = (<div id="postMedia"><video preload autoPlay loop src={source}/></div>);      
              // Not all links with gifv work. Don't know why.
          } else {
              showMedia = (<div id="postMedia"><img src={post.url}/></div>);
            }
        } else if (post.preview.enabled === false) {
              showMedia = null;
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
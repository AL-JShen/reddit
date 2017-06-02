import React, { Component } from 'react';

class CardHead extends Component {

  render() {
    const post = this.props.post;
    return (
      <div className="cardHead">
        
        <div className="headRight">
          <div id="postScore">{post.score}</div>
          <div id="postSubmissionInfo"><span id="postAuthor"><a href={`https://www.reddit.com/user/${post.author}`}>u/{post.author}</a></span> to <span id="postSubreddit"><a href={`https://www.reddit.com/r/${post.subreddit}`}>r/{post.subreddit}</a></span></div>
        </div>
        
        <div className="headLeft">
          <div id="postTitle"><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></div>
        </div>
        
      </div>
    );
  }

}

export default CardHead;
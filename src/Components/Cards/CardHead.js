import React, { Component } from 'react';
import { timeAgo } from '../Time';

class CardHead extends Component {

  render() {
    const post = this.props.post;
    return (
      <div className="cardHead">
        
        <div className="headTop">
          <div className="topTop">
            <div id="postScore">{post.score} Points</div>
            <div id="postComments"><a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">Comments</a></div>
          </div>
          
          <div className="topBottom">
                      
            <div id="postSubmissionInfo">
              Submitted&nbsp; 
              <span id="postTime">{timeAgo(post.created_utc)}</span>
              &nbsp;by&nbsp;
              <span id="postAuthor"><a href={`https://www.reddit.com/user/${post.author}`}>u/{post.author}</a></span>
              &nbsp;to&nbsp;
              <span id="postSubreddit"><a href={`https://www.reddit.com/r/${post.subreddit}`}>r/{post.subreddit}</a> </span>
            </div>
          </div>
          
        </div>
        
        <br />
        
        <div className="headBottom">
          <div id="postTitle"><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></div>

        </div>
        
      </div>
    );
  }

}

export default CardHead;
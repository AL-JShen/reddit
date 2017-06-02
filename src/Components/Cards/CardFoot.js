import React, { Component } from 'react';

class CardFoot extends Component {

  render() {
    const post = this.props.post;
    return (
      <div className="cardFoot">
        <div id="postComments"><a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">Comments</a></div>
      </div>
    );
  }

}

export default CardFoot;
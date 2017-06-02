import React, { Component } from 'react';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardFoot from './CardFoot';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <CardHead post={this.props.post}/>
        <CardBody showMedia={this.props.showMedia}/>
        <CardFoot post={this.props.post}/>
      </div>
    );
  }

}

export default Card;
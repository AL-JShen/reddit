import React, { Component } from 'react';
import CardHead from './CardHead';
import CardBody from './CardBody';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <CardHead post={this.props.post}/>
        <CardBody showMedia={this.props.showMedia}/>
      </div>
    );
  }

}

export default Card;
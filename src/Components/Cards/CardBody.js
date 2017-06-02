import React, { Component } from 'react';

class CardBody extends Component {

  render() {
    return (
      <div className="cardBody">
        {this.props.showMedia}
      </div>
    );
  }

}

export default CardBody;
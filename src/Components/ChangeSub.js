import React, { Component } from 'react';

class ChangeSub extends Component {

  render() {
    return (
      <div className="changeSub">
        <input id="inputSub" type="string" placeholder="SubReddit" onChange={this.props.handleSub} />
        <button type="button"  onClick={this.props.handleChange}>Change a sub!</button>
      </div>
    );
  }

}

export default ChangeSub;
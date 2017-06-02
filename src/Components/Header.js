import React, { Component } from 'react';
import ChangeSub from './ChangeSub';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="currentSub">
          <h1>/r/{this.props.sub}</h1>
        </div>
        <ChangeSub {...this.props} />
      </div>
    );
  }

}

export default Header;
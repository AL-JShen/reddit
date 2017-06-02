import React, { Component } from 'react';
import logo from '../logo.svg';

class Title extends Component {

  render() {
    return (
      <div className="title">
          <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <h2> FOR </h2>
        <img src="http://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_logotype_wordmark.png" />
      </div>
    );
  }

}

export default Title;
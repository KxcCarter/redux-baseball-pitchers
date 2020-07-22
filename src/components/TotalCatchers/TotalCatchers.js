import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalCatchers extends Component {
  render() {
    return (
      <div>
        <p>it's a catcher thing!</p>
      </div>
    );
  }
}

// needs access to store

export default connect()(TotalCatchers);

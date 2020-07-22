import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {
  render() {
    return (
      <div>
        <p>it's a pitcher thing!</p>
      </div>
    );
  }
}

// needs access to store

export default connect()(TotalPitchers);

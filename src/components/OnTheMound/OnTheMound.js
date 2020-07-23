import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnTheMound extends Component {
  render() {
    return <h2>On the Mound: {this.props.mound}</h2>;
  }
}

const mapStoreToProps = (store) => {
  return {
    mound: store.currentPitcher,
  };
};

export default connect(mapStoreToProps)(OnTheMound);

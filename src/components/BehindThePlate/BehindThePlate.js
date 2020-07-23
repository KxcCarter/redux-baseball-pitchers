import React, { Component } from 'react';
import { connect } from 'react-redux';

class BehindThePlate extends Component {
  render() {
    return <h2>Behind the Plate: {this.props.plate}</h2>;
  }
}

const mapStoreToProps = (store) => {
  return {
    plate: store.currentCatcher,
  };
};

export default connect(mapStoreToProps)(BehindThePlate);

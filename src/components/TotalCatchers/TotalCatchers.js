import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalCatchers extends Component {
  render() {
    return <div>Total Catchers: {this.props.catchers.length}</div>;
  }
}

const mapStoreToProps = (store) => {
  return {
    catchers: store.catcherList,
  };
};

export default connect(mapStoreToProps)(TotalCatchers);

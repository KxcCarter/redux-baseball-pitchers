import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {
  render() {
    return <div>Total Pitchers: {this.props.pitchers.length}</div>;
  }
}

const mapStoreToProps = (store) => {
  return { pitchers: store.pitcherList };
};

export default connect(mapStoreToProps)(TotalPitchers);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    newPitcher: '',
  };

  render() {
    return <div>Total Pitchers: {this.props.pitchers.length}</div>;
  }
}

const mapStoreToProps = (store) => {
  return { pitchers: store.pitcherList };
};

export default connect(mapStoreToProps)(TotalPitchers);

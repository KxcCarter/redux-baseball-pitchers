import React, { Component } from 'react';
import { connect } from 'react-redux';

class PitcherList extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
  };

  handlePitcherSelectClick = (selectedPitcher) => (event) => {
    this.props.dispatch({
      type: 'SELECT_PITCHER',
      payload: selectedPitcher,
    });
    // this.setState({
    //   currentPitcher: selectedPitcher,
    // });
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.pitchers.map((pitcher, index) => (
            <li key={index} onClick={this.handlePitcherSelectClick(pitcher)}>
              {pitcher}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { pitchers: store.pitcherList };
};

export default connect(mapStoreToProps)(PitcherList);

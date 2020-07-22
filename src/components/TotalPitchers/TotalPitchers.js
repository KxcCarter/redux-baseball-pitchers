import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    newPitcher: '',
  };

  handlePitcherNameChange = (event) => {
    this.setState({
      newPitcher: event.target.value,
    });
  };

  handlePitcherSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_PITCHER',
      payload: this.state.newPitcher,
    });
  };

  handlePitcherSelectClick = (selectedPitcher) => () => {
    this.setState({
      currentPitcher: selectedPitcher,
    });
  };
  render() {
    return (
      <div>
        <h3>All Pitchers</h3>
        <form onSubmit={this.handlePitcherSubmit}>
          <input
            type="text"
            value={this.state.newPitcher}
            onChange={this.handlePitcherNameChange}
            placeholder="New Pitcher Name"
          />
          <button type="submit">Add Pitcher</button>
        </form>
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

export default connect(mapStoreToProps)(TotalPitchers);

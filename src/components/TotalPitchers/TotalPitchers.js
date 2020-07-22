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
    this.setState({
      newPitcher: '',
      pitcherList: [...this.state.pitcherList, this.state.newPitcher],
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
          {this.state.pitcherList.map((pitcher, index) => (
            <li key={index} onClick={this.handlePitcherSelectClick(pitcher)}>
              {pitcher}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// needs access to store

export default connect()(TotalPitchers);

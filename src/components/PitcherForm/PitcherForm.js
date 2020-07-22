import React, { Component } from 'react';
import { connect } from 'react-redux';

class PitcherForm extends Component {
  state = {
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

  render() {
    return (
      <div>
        <form onSubmit={this.handlePitcherSubmit}>
          <input
            type="text"
            value={this.state.newPitcher}
            onChange={this.handlePitcherNameChange}
            placeholder="New Pitcher Name"
          />
          <button type="submit">Add Pitcher</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { pitchers: store.pitcherList };
};

export default connect(mapStoreToProps)(PitcherForm);

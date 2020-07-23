import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatcherForm extends Component {
  state = {
    newCatcher: '',
  };

  handleCatcherNameChange = (event) => {
    this.setState({
      newCatcher: event.target.value,
    });
  };

  handleCatcherSubmit = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'ADD_CATCHER',
      payload: this.state.newCatcher,
    });

    this.setState({
      newCatcher: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCatcherSubmit}>
          <input
            type="text"
            value={this.state.newCatcher}
            onChange={this.handleCatcherNameChange}
            placeholder="New Catcher Name"
          />
          <button type="submit">Add Catcher</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    catchers: store.catcherList,
  };
};

export default connect(mapStoreToProps)(CatcherForm);

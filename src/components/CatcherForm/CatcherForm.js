import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatcherForm extends Component {
  state = {
    currentCatcher: 'Elston Howard',
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

  // Does this belong here?
  handleCatcherSelectClick = (selectedCatcher) => () => {
    this.setState({
      currentCatcher: selectedCatcher,
    });
  };
  render() {
    return (
      <div>
        <h3>All Catchers</h3>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalCatchers extends Component {
  state = {
    currentCatcher: 'Elston Howard',
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
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
        <ul>
          {this.props.catchers.map((catcher, index) => (
            <li key={index} onClick={this.handleCatcherSelectClick(catcher)}>
              {catcher}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    catchers: store.catcherList,
  };
};

export default connect(mapStoreToProps)(TotalCatchers);

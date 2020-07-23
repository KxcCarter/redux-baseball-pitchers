import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatcherList extends Component {
  state = {
    currentCatcher: 'Elston Howard',
    newCatcher: '',
  };

  handleCatcherSelectClick = (selectedCatcher) => (event) => {
    this.props.dispatch({
      type: 'SELECT_CATCHER',
      payload: selectedCatcher,
    });

    // this.setState({
    //   currentCatcher: selectedCatcher,
    // });
  };
  render() {
    return (
      <div>
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

export default connect(mapStoreToProps)(CatcherList);

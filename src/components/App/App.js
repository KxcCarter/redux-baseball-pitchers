import React, { Component } from 'react';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    currentCatcher: 'Elston Howard',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
  };

  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <div>Total Pitchers: {this.state.pitcherList.length}</div>
        <div>Total Catchers: {this.props.store.catcherList.length}</div>

        <br></br>
        <TotalCatchers />
        <TotalPitchers />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(App);

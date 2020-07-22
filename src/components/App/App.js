import React, { Component } from 'react';
import { connect } from 'react-redux';

// ---
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import PitcherForm from '../PitcherForm/PitcherForm';
import PitcherList from '../PitcherList/PitcherList';

class App extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    currentCatcher: 'Elston Howard',
  };

  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <div>Total Pitchers: {this.props.store.pitcherList.length}</div>
        <div>Total Catchers: {this.props.store.catcherList.length}</div>

        <br></br>
        <h3>All Pitchers</h3>
        <PitcherForm />
        <PitcherList />
        <TotalCatchers />

        {/* <TotalPitchers /> */}
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

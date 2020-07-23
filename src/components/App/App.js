import React, { Component } from 'react';
import { connect } from 'react-redux';

// ---
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import PitcherForm from '../PitcherForm/PitcherForm';
import PitcherList from '../PitcherList/PitcherList';
import CatcherForm from '../CatcherForm/CatcherForm';
import CatcherList from '../CatcherList/CatcherList';

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
        <TotalPitchers />
        <TotalCatchers />

        <br></br>
        <h3>All Pitchers</h3>
        <PitcherForm />
        <PitcherList />
        <CatcherForm />
        <CatcherList />
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

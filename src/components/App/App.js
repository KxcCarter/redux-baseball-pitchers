import React, { Component } from 'react';
import { connect } from 'react-redux';

// ---
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import PitcherForm from '../PitcherForm/PitcherForm';
import PitcherList from '../PitcherList/PitcherList';
import CatcherForm from '../CatcherForm/CatcherForm';
import CatcherList from '../CatcherList/CatcherList';
import BehindThePlate from '../BehindThePlate/BehindThePlate';
import OnTheMound from '../OnTheMound/OnTheMound';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <OnTheMound />
        <BehindThePlate />
        <TotalPitchers />
        <TotalCatchers />
        <h3>All Pitchers</h3>
        <PitcherForm />
        <PitcherList />
        <h3>All Catchers</h3>
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

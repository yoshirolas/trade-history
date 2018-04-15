import React, { Component } from 'react';
import TradeHistory from '../containers/TradeHistory';
import Orders from '../containers/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Orders/>
        <TradeHistory/>
      </div>
    );
  }
}

export default App;

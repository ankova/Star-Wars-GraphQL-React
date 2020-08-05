import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/Main';
import HistoryPage from './pages/History';
import { PlayersProvider } from './Players/PlayersContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PlayersProvider>
          <Switch>
            <Route path='/' component={MainPage} exact />
            <Route path='/history' component={HistoryPage} exact />
          </Switch>
        </PlayersProvider>
      </BrowserRouter>
    );
  }
}

export default App;

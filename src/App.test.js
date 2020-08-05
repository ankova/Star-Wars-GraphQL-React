import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/Main';
import HistoryPage from './pages/History';
import { PlayersProvider } from './Players/PlayersContext';

import App from './App';

describe('App component', () => {
  let component;

  beforeEach(() => component = mount(<App />));

  it('renders component without crashing', () => {
    const tree = renderer.create(<App />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});



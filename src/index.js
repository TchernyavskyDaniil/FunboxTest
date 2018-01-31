import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';

import IndexComponent from './components/index_component';
import Level1Component from './components/level1_component';
import Level2Component from './components/level2_component';

import './scss/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/FunboxTest/level1" component={Level1Component}/>
        <Route path="/FunboxTest/level2" component={Level2Component}/>
        <Route path="/" component={IndexComponent}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.main'));

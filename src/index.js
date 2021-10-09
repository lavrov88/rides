import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router'

store.initState()

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
         <Switch>
            <Route exact path='/' component={App} />
            <Route path='/:number' component={App} />
         </Switch>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


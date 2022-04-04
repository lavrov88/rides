import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router'

store.initState()

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Route 
          path='/' 
          render={({ location }) => <App location={location} store={store} />} />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)



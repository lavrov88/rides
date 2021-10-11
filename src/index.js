import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router'

store.initState()

const rerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
             <Switch>
               <Route exact path='/' 
                  render={({ location }) => <App location={location} store={store} />} />
               <Route path='/rides/:number' 
                  render={({ location }) => <App location={location} store={store} />} />
             </Switch>
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)



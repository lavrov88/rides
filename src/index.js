import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router'

store.initState()

const rerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <Route path='/' 
               render={({ location }) => <App location={location} store={store} />} />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)



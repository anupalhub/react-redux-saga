import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import Users from './container/users'
import Posts from './container/posts'
import Albums from './container/albums'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Users} path="/" exact/>
          <Route component={Posts} path="/posts" exact/>
          <Route component={Albums} path="/albums" exact/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Header from '../elements/Header/Header';
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie/Movie";
import Home from '../Home/Home'
import Footer from '../elements/Footer/Footer'

import  './App.scss';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:movieId" component={Movie} />
          <Route component ={NotFound} />
        </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

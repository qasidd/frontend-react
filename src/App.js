'use strict';

import Introduction from "./components/01-intro/First"
import Second from "./components/01-intro/Second";
import Standard from "./components/02-parents-child/Standard"
import Parent from "./components/03-props/01-simple/Parent";
import PropWithDifferentTypes from "./components/03-props/02-intermediate/PropWithDifferentTypes";
import WhatAreProps from "./components/03-props/WhatAreProps";
// import Clock from "./components/04-lifecycle/Clock";
import Counter from "./components/05-states/addingstate/Counter";
import Car from "./components/05-states/exercises/Car";
import Login from "./components/05-states/exercises/Login";
import CounterUpdate from "./components/05-states/updatingstate/CounterUpdate";
import DifferentStates from "./components/05-states/updatingstate/DifferentStates";
import ControlledInput from "./components/06-forms/ControlledInput";
import SearchableList from "./components/07-lifting-state/SearchableList";
import Game from "./components/07-lifting-state/tutorial/Game";
import PeopleCom from "./components/People/PeopleCom";
import Store from "./components/07-lifting-state/exercise/Store";
import Clock from "./components/08-hooks/Clock";

// import Nav from "./components/09-routing/Nav";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from "./components/09-routing/Home";
// import About from "./components/09-routing/About";
// import Product from "./components/09-routing/Product";
// import User from "./components/09-routing/User";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./components/tdl/Main";
import About from "./components/tdl/About";
import Faq from "./components/tdl/Faq";
import Nav from "./components/tdl/Nav";
import NotFound from "./components/tdl/NotFound";
import Tesco from "./components/10-data-requests/Tesco";
import FilmMain from "./components/film/FilmMain";

const App = () => {
  return (
    <div className="App">
      {/* <p>Hello world</p>
      <Introduction/>
      <Second/>
      <Standard/> */}
      {/* <WhatAreProps /> */}
      {/* <Parent /> */}
      {/* <PropWithDifferentTypes /> */}
      {/* <PeopleCom /> */}
      {/* <Clock /> */}
      {/* <Counter /> */}
      {/* <CounterUpdate /> */}
      {/* <DifferentStates /> */}
      {/* <Login /> */}
      {/* <Car /> */}
      {/* <ControlledInput /> */}
      {/* <SearchableList /> */}
      {/* <Game /> */}
      {/* <Store /> */}
      {/* <Clock /> */}

      {/* <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Product />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </Router> */}

      <Router>
        <Nav />
        <div className="container pt-2">
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/tesco">
              <Tesco />
            </Route>
            <Route path="/films">
              <FilmMain />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

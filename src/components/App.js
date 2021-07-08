import React from "react";
// import PropTypes from "prop-types";
import "./App.css";
import "animate.css";

import SearchResults from "./SearchResults/SearchResults";
import { ProvideSearch } from "../utils/context/useSearchContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Movies from "./views/Movies/Movies";
import Header from "./Header/Header";
import TvShows from "./views/TvShows/TvShows";
import People from "./views/People/People";
import Preview from "./Preview/Preview";
import Person from "./Person/Person";

const App = () => {
  return (
    <>
      <ProvideSearch>
        <Router>
          <Header />
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/search/:filter">
              <SearchResults />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/person/:id">
              <Person />
            </Route>
            <Route path="/:path/preview/:id">
              <Preview />
            </Route>
            <Route path="/tv_shows">
              <TvShows />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ProvideSearch>
    </>
  );
};

App.propTypes = {};

export default App;

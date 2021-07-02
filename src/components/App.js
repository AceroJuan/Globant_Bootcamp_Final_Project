import React from "react";
// import PropTypes from "prop-types";
import "./App.css";
import "animate.css";

import SearchResults from "./searchResults/SearchResults";
import { ProvideSearch } from "../utils/context/useSearchContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Movies from "./views/movies/Movies";
import Header from "./header/Header";
import TvShows from "./views/tvShows/TvShows";
import People from "./views/people/People";
import Preview from "./preview/Preview";
import Person from "./person/Person";

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
            <Route path="/search">
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

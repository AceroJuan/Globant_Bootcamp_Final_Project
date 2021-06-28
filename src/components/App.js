import React from "react";
// import PropTypes from "prop-types";
import "./App.css";
import "animate.css";

import SearchResults from "./searchResults/SearchResults";
import { ProvideSearch } from "../utils/context/useSearchContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Movies from "./views/movies/Movies";
import Trending from "./views/trending/Trending";
import Header from "./header/Header";
import TvShows from "./views/tvShows/TvShows";
import Preview from "./views/preview/Preview";

const App = () => {
  // const handleFindMovie = () => {
  //   setMovies((movie) => ["cruella", ...movie]);
  // };

  return (
    <>
      <ProvideSearch>
        <Router>
          <Header />
          <section>
            <SearchResults />
          </section>
          <footer></footer>
          <Switch>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/preview/:id">
              <Preview />
            </Route>
            <Route path="/tv">
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

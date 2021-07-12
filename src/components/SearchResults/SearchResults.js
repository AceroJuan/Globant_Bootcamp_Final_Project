import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/context/useSearchContext";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import FilterMenu from "../FilterMenu/FilterMenu";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const SearchResults = () => {
  const { filter } = useParams();
  const { state } = useSearch();

  return (
    <main className="search">
      <h1 className="search__h1 capitalize px animate__animated animate__fadeIn">
        search
      </h1>
      <section className="search__cards">
        <FilterMenu />
        <div>
          {filter === "movies" ? (
            <div className="search__section__ul">
              {state?.movies?.map((item) => (
                <SearchResultItem
                  key={uuidv4()}
                  item={item}
                  path={"movie"}
                  data-testid="searchResults"
                />
              ))}
            </div>
          ) : filter === "tv" ? (
            <div className="search__section__ul">
              {state?.tv?.map((item) => (
                <SearchResultItem key={uuidv4()} item={item} path={"tv"} />
              ))}
            </div>
          ) : filter === "people" ? (
            <div className="search__section__ul">
              {state?.people?.map((item) => (
                <SearchResultItem key={uuidv4()} item={item} path={"people"} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default SearchResults;

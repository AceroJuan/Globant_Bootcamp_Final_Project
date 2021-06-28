import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import usePreviewData from "../../../utils/hooks/usePreviewData";
import MovieGridItem from "../../MovieGridItem";

const Preview = () => {
  let { id } = useParams();
  const data = usePreviewData(id);

  return (
    <>
      <h2>preview</h2>
      <ul className="card__grid">
        {data.map((movie) => (
          <MovieGridItem key={movie.id} {...movie} />
        ))}
      </ul>
    </>
  );
};

Preview.propTypes = {};

export default Preview;

import React from "react";
import { useParams } from "react-router-dom";
import useCreditsData from "../../utils/hooks/useCreditsData";
import usePreviewData from "../../utils/hooks/usePreviewData";
import useRecommendationsData from "../../utils/hooks/useRecommendationsData";
import Cast from "../Cast/Cast";
import Recommendations from "../Recommendations/Recommendations";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const Preview = () => {
  let { id, path } = useParams();
  const { poster_img, title, name, release_date, first_air_date, overview } =
    usePreviewData(id, path);

  const creditInfo = useCreditsData(id, path);
  const recommendedInfo = useRecommendationsData(id, path);

  return (
    <>
      <div className="preview animate__animated animate__fadeIn animate__delay-1s">
        <img
          className="preview__img"
          src={poster_img}
          alt={`poster of ${title ? title : name}`}
          title={title ? title : name}
        />
        <div className="preview__article">
          <h1 className="preview__article__h1">{`${title ? title : name}`}</h1>
          <p
            className="preview__article__p capitalize"
            data-testid="previewP"
          >{`release date: ${release_date ? release_date : first_air_date}`}</p>
          <h2 className="preview__article__h2 capitalize">overview</h2>
          <p className="preview__article__p">{`${overview}`}</p>
        </div>
      </div>
      <div className="containers">
        <h2
          className="containers__h2 animate__animated animate__fadeIn animate__delay-1s capitalize"
          data-testid="previewH2"
        >
          cast
        </h2>
        <div className="custom__scroll animate__animated animate__fadeIn animate__delay-1s">
          {creditInfo.map((item) => (
            <Cast key={uuidv4()} {...item} />
          ))}
        </div>
      </div>

      <div className="containers">
        <h2 className="containers__h2 animate__animated animate__fadeIn animate__delay-1s capitalize">
          recommendations
        </h2>
        <div className="custom__scroll animate__animated animate__fadeIn animate__delay-1s">
          {recommendedInfo.map((item) => (
            <Recommendations key={uuidv4()} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Preview;

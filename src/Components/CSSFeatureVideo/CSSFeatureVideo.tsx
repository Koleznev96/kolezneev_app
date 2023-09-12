import React, { useState } from "react";

import "./CSSFeatureVideo.css";

const CSSFeatureVideo = ({
  title = "",
  description = "",
  url = "",
}: TCSSFeatureVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="css-feature-video">
      {isPlaying && (
        <div className="css-feature-video__container">
          <video className="css-feature-video__video" autoPlay controls>
            <source
              className="css-feature-video__content "
              src={url}
              type="video/mp4"
            />
          </video>
        </div>
      )}

      <h2 className="css-feature-video__title">{title}</h2>
      <p className="css-feature-video__description">{description}</p>
      {!isPlaying && (
        <button className="css-feature-video__cta" onClick={handlePlay}>
          Learn More
        </button>
      )}
    </div>
  );
};

type TCSSFeatureVideoProps = {
  url?: string | any;
  title?: string;
  description?: string;
};

export default CSSFeatureVideo;

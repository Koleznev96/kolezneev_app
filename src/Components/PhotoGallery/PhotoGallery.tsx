import React from "react";

import "./PhotoGallery.css";

const PhotoGallery = () => {
  const photos = [
    { id: 1, imageUrl: "../../assets/profile.png" },
    { id: 2, imageUrl: "../../assets/photo_2.jpg" },
  ];

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.imageUrl}
          alt=""
          className="photo-gallery__image"
        />
      ))}
    </div>
  );
};

export default PhotoGallery;

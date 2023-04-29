import React from "react";

function GifGridItem({title, url }) {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifGridItem;

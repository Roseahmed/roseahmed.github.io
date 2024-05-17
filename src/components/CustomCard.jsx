/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const CustomCard = ({ items }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="shadow-lg m-2 p-3 rounded cursor-pointer">
      <div className="">
        <img
          src={items.img}
          alt="photo"
          className="md:h-52 flex items-center justify-center w-full object-contain"
        />
      </div>
      <div className="content">
        <div className="title font-semibold py-2">
          <h1>{items.title} </h1>
        </div>
        <div className="description text-sm">
          {showFullText ? (
            <h1>{items.description}</h1>
          ) : (
            <p>{items.description.slice(0, 50)}...</p>
          )}
          {items.description.length > 50 && (
            <span className="showMore font-semibold" onClick={toggleFullText}>
              {showFullText ? "Show Less" : "Show More"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

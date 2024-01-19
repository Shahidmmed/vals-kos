import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigator = useNavigate();
  const containerRef = useRef(null);
  let hoverTimeout;

  useEffect(() => {
    const container = containerRef.current;
    const card = document.querySelector(".card");

    const handleMouseEnter = () => {
      setIsHovered(true);
      setShowLoading(true);
      card.style.top = "-90px";

      // Set timeout for 3 seconds (3000 milliseconds)
      hoverTimeout = setTimeout(() => {
        navigator("/vals-kos/open");
      }, 4000);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setShowLoading(false);
      card.style.top = "0";
      // Clear the timeout when mouse leaves
      clearTimeout(hoverTimeout);
    };

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      // Clear the timeout when component unmounts
      clearTimeout(hoverTimeout);
    };
  }, [navigator]);

  return (
    <div
      ref={containerRef}
      className={`container ${isHovered ? "hovered" : ""}`}
    >
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card">
          <div className="from-to">
            <span>To: </span>
            <span className="from">From: </span>
          </div>
          <div className="text">
            <br /> I'm falling for
            <br /> you
          </div>
          <div className="heart"></div>
        </div>
        <div className="hearts">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
        </div>
      </div>
      <div className="shadow"></div>

      {showLoading && (
        <div className="loading-container">
          <div className="loading-message">There's more, please wait...</div>
        </div>
      )}
    </div>
  );
};

export default Card;

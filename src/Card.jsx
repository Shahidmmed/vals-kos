import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigator = useNavigate();
  let hoverTimeout;

  useEffect(() => {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");

    const handleMouseEnter = () => {
      setIsHovered(true);
      card.style.top = "-90px";

      // Set timeout for 10 seconds
      hoverTimeout = setTimeout(() => {
        navigator("/open");
      }, 3000);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.top = "0";
      // Clear the timeout when mouse leaves
      clearTimeout(hoverTimeout);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      // Clear the timeout when component unmounts
      clearTimeout(hoverTimeout);
    };
  }, []);

  return (
    <div className={`container ${isHovered ? "hovered" : ""}`}>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card">
          <div className="from-to">
            <span>To: Elsie</span>
            <span className="from">From: Kwaku</span>
          </div>
          <div className="text">
            This is just to remind
            <br /> you that I'll always
            <br /> pick you first
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
    </div>
  );
};

export default Card;

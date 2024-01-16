import React, { useRef, useState } from "react";
import "./OpeningCard.css";

const OpeningCard = () => {
  const buttonRef = useRef(null);
  const [isCardOpen, setCardOpen] = useState(false);

  const handleClick = () => {
    const createRandomValue = (max) => Math.random() * (max - 0) + 0;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
      const styles = `transform: translate3d(${
        createRandomValue(500) - 250
      }px, ${createRandomValue(200) - 150}px, 0) rotate(${createRandomValue(
        360
      )}deg);
                        background: hsla(${createRandomValue(360)},100%,50%,1);
                        animation: bang 700ms ease-out forwards;
                        opacity: 0`;

      const element = document.createElement("i");
      element.style.cssText = styles;
      fragment.appendChild(element);
    }

    buttonRef.current.appendChild(fragment);
  };

  return (
    <div>
      <div className="valentines-day-card">
        <input id="open" type="checkbox" />
        <label className="open" for="open"></label>
        <div className="card-front">
          <div className="note">Click to Open</div>
        </div>

        <div className="card-inside">
          <div className="text-one">Will you be my</div>
          <div className="big-heart"></div>
          <div className="smile"></div>
          <div className="eyes"></div>
        </div>
      </div>
      {/*  <div className="yes">
        <button onClick={handleClick} ref={buttonRef}>
          <span>yes</span>
        </button>
      </div> */}
    </div>
  );
};

export default OpeningCard;

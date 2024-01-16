import React from "react";
import Light from "./images/light.svg";
import Speaker from "./images/speaker.svg";
import Replay from "./images/vector.svg";
import Backward from "./images/vector1.svg";
import Forward from "./images/vector2.svg";
import Zoom from "./images/vector3.svg";
import './static/Video.css'; // Import the CSS file for styling

export default function Video() {
  const handleButtonClick = (action) => {
    // Implement your logic based on the button action (e.g., 'speaker', 'light', etc.)
    console.log(`Button clicked: ${action}`);
  };

  return (
    <div>
      <div className="flex justify-center relative top-[220px]">
        <div className="w-[712px] h-[393.19px] relative">
          <div className="w-[712px] h-[393.19px] left-0 top-0 absolute bg-stone-300 rounded-[42.51px]" />
          <div className="w-[712px] h-[393.19px] left-0 top-0 absolute bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-600 rounded-[42.51px]">
            <button
              className="w-[34.01px] h-[34.01px] left-[643.99px] top-[34.01px] absolute"
              onClick={() => handleButtonClick("speaker")}
            >
              <img className="w-full h-full" src={Speaker} alt="Speaker" />
            </button>
            <button
              className="w-[34.01px] h-[34.01px] left-[34.01px] top-[34.01px] absolute"
              onClick={() => handleButtonClick("light")}
            >
              <img className="w-full h-full" src={Light} alt="Hint" />
            </button>
            <div className="left-[199.79px] top-[174.28px] absolute text-center text-white text-[38.26px] font-bold font-['Lato'] tracking-wide">
              9 + 6 + 7x - 2x - 3
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative top-[225px]">
        <button
          className="w-[30.01px] h-[30.01px] left-[34.01px] top-[46.01px] relative replay-btn"
          onClick={() => handleButtonClick("replay")}
        >
          <img className="w-full h-full" src={Replay} alt="Replay" />
        </button>
        <div className="w-[612px] h-[60px] justify-start items-center gap-[140px] inline-flex">
          <button
            className="w-[60.01px] h-[60.01px] left-[140.01px] top-[30.01px] relative backward-btn"
            onClick={() => handleButtonClick("backward")}
          >
            <img className="w-full h-full" src={Backward} alt="Back" />
          </button>
          <div className="justify-start items-center gap-[43px] flex">
            <div className="text-gray-800 text-2xl font-bold font-['Inter'] top-[32px] left-[73px] relative">
              01/10
            </div>
            <button
              className="w-[60.01px] h-[60.01px] left-[104.01px] top-[30.01px] relative forward-btn"
              onClick={() => handleButtonClick("forward")}
            >
              <img className="w-full h-full" src={Forward} alt="Forward" />
            </button>
            <button
              className="w-[25.01px] h-[25.01px] left-[154.01px] top-[26.01px] relative zoom-btn"
              onClick={() => handleButtonClick("zoom")}
            >
              <img className="w-full h-full" src={Zoom} alt="Zoom" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

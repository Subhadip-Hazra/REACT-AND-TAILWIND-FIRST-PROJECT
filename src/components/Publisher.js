import React, { useState } from "react";
import Logos from "./images/component-4.svg";
import Add from "./images/plus.svg";
import Ellipse from "./images/ellipse-1.svg";

export default function Publisher() {
    const [rotation, setRotation] = useState(0);

    const handleCreateFlashcard = () => {
        // Implement your logic for creating a flashcard here
        console.log("Create Flashcard clicked");

        // Rotate the plus image by 45 degrees on each click
        setRotation(rotation + 45);
    };

    return (
        <div className="left-[98px] top-[350.81px] relative">
            <div className="w-[217px] h-[80.60px] justify-start items-start gap-[21.26px] inline-flex top-[30px] left-[40px] relative">
                <div className="w-[80.60px] h-[80.60px] relative">
                    <img
                        className="w-[80.60px] h-[80.60px] left-0 top-0 absolute bg-white rounded-full"
                        src={Ellipse}
                        alt="Ellipse"
                    />
                    <div className="w-[44.69px] h-[34.54px] left-[17.71px] top-[23.03px] absolute"></div>
                </div>
                <div className="flex-col justify-center items-start gap-[10.63px] inline-flex">
                    <div className="text-zinc-500 text-xs font-bold font-['Inter']">
                        Published by
                    </div>
                    <img
                        className="w-[115.14px] h-[34.54px] relative"
                        src={Logos}
                        alt="Logos"
                    />
                </div>
            </div>
            {/* Plus image as a button with rotation effect */}
            <button
                className="w-[299px] h-[60px] justify-start items-center gap-2 inline-flex top-[30px] left-[832px] relative"
                onClick={handleCreateFlashcard}
            >
                <img
                    className="w-[60px] h-[60px] relative"
                    src={Add}
                    alt="Add"
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
                <div className="text-blue-950 text-[28px] font-semibold font-['Inter']">
                    Create Flashcard
                </div>
            </button>
        </div>
    );
}

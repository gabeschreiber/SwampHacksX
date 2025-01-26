import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Title() {
    {/**/}
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/target-page'); // Replace '/target-page' with the desired path
    };

    return (
        <>
            <header>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">EchoLink</h1>
                
            </header>
            <button className="bg-[#ccd6f6] text-black p-2 rounded-lg" onClick={handleClick}>Get Started</button>
            

        </>
    );
}

export default Title;
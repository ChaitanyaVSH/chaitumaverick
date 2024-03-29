import React, { useEffect } from 'react';
import { init } from 'ityped';
import Confetti from 'react-confetti';
import "./confetti.css"

const ConfettiComponent = () => {

    useEffect(()=>{
        const itypedTextHandler_CHM = document.querySelector('#chm_ityped_text_handler');
        init(itypedTextHandler_CHM,
            {
                showCursor: false,
                strings: [
                    "Let this year bring you only happiness...",
                    "Let this year you network more and more...",
                    "Let this year bring you more launch parties...",
                    "Let this year bring you less SEV 2s..."
                ],
                typeSpeed: 50,
                backSpeed: 10,
            });
    },[]);

    return (
        <div className="confettiContainer">
            <Confetti
                width={1200}
                height={1200}
            />
            <div className="wishingMessage">
                <img src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-happy-new-year-2024-png-image_9138916.png" alt="2024"/>
                <div className="wishesContent">
                    <h1>Happy New Year</h1>
                    {/* eslint-disable-next-line */}
                    <h5 id="chm_ityped_text_handler"></h5>
                </div>
            </div>
        </div>
    )
}

export default ConfettiComponent;

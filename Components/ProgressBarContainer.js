// ProgressBar.js

import React, {useState} from 'react';
import '../app/progressBar.css';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Range = (props) => {
    return (
        <div className="range" style={{width: `${props.percentRange}%`}}>
        </div>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/>
        </div>
    );
};

export const ProgressBarContainer = () => {
    let [percentRange, setProgress] = useState(0);

    return (
        <div className="container">
                
                <ProgressBar percentRange={percentRange}/>
            <div className="toggle-buttons">
            <button onClick={() => setProgress(percentRange > 0 ?
                    percentRange - 20 : 0)} className='text-[#94D163]'><FaMinusCircle />
                </button>
                
                <button onClick={() => setProgress(percentRange < 100 ? percentRange + 20 : 100)} className='text-[#94D163]'><FaPlusCircle /></button>
                <button onClick={() => setProgress(0)}>Reset</button>
            </div>
        </div>
    );
};
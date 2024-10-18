import { useRef, useState } from "react";


export default function SetTime({ editState, setEditState, hrRef, minRef, secRef }) {


    function getTimeInfo() {

        const hr = hrRef.current.value;
        const min = minRef.current.value;
        const sec = secRef.current.value;

        if (hr == '' || min == '' || sec == '' || hr > 24 || min > 59 || sec > 59) alert("Enter the valid timer values in input field");
        else {

            setEditState(editState => !editState);
        }
    }
    return (
        <div>
            <input ref={hrRef} type="text" placeholder='Hours' ></input>
            <input ref={minRef} type="text" placeholder='Minutes' ></input>
            <input ref={secRef} type="text" placeholder='Seconds' ></input>
            <br></br>
            <button onClick={getTimeInfo}>Set</button>
        </div>
    );
}
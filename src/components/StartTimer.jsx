import { useEffect, useRef, useState } from "react";


const style = {
    display: "flex",
    justifyContent: "center",
    gap: "100px"
}

const numbers = {
    fontSize: "50px"
}

const inputs = {

}

const watch = {
    display: "flex",
    flexDirection: "column"
}

export default function StartTimer({ hr, min, sec }) {
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);
    const [hours, setHours] = useState(hr);
    const [editState, setEditState] = useState(false);
    const timerRef = useRef(0);
    const clickedRef = useRef(null);
    const [startTimer, setStartTimer] = useState(true);
    const clock = useRef(null);
    const [heading, setHeading] = useState('Start the Timer');

    // useEffect(function () {
    //     timerRef.current = setInterval(function () {

    //         setSeconds((s) => {
    //             if (s == 0) {
    //                 setMin();
    //                 return s + 59;
    //             } else {
    //                 return s - 1;
    //             }
    //         })
    //     }, 1000);
    // }, []);

    function start() {
        setHeading('Timer has Started')
        setStartTimer(s => !s);
        timerRef.current = setInterval(function () {
            // setSeconds((s) => s == 0 ? s + 59 : s - 1);
            setSeconds((s) => {
                if (s == 0) {
                    setMin();
                    return s + 59;
                } else {
                    return s - 1;
                }
            })
        }, 1000);
    }

    function setMin() {
        setMinutes(m => {
            if (m == 0) {
                setHr();
                return m + 59;
            } else {
                return m - 1
            }
        });
    }

    function setHr() {
        setHours(h => {
            if (h == 0) {
                clearInterval(timerRef.current);
                setSeconds(0);
                setMinutes(0);
                setHours(0);
            } else {
                return h - 1
            }
        });
    }

    function stopTimer() {
        clearInterval(timerRef.current);
        setStartTimer(s => !s);
        // start();
    }

    function edit() {
        setEditState(e => !e);
        // clickedRef.current.focus();

    }

    function handleEdit(e) {
        const newHr = e.currentTarget.textContent;
        console.log(newHr);
        setHours(newHr);
    }

    function handleSet() {
        setEditState(e => !e);
        console.log(hours);
    }

    return (
        <div>


            {!editState &&
                <div>
                    <h1>
                        {heading}
                    </h1>
                    <div style={style}>
                        <div onClick={edit} style={watch}>
                            <p
                                ref={clickedRef}
                                style={numbers}
                            >{hours}</p>
                            <p>Hours</p>
                        </div>

                        <div onClick={edit} style={watch}>
                            <p style={numbers}>{minutes}</p>
                            <p>Minutes</p>
                        </div>

                        <div onClick={edit} style={watch}>
                            <p style={numbers}>{seconds}</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    {startTimer && <div>
                        <button onClick={start}>Start</button>
                        <p>Click on timer to edit</p>
                    </div>}
                    {!startTimer && <div>
                        <button onClick={stopTimer}>Stop</button>
                        <p>Click on timer to edit</p>
                    </div>}
                </div>}


            {editState &&
                <div>
                    <h1>
                        Set Timer
                    </h1>
                    <div style={style}>
                        <div style={watch}>
                            <p
                                className="clock"
                                contentEditable
                                suppressContentEditableWarning={true}
                                onInput={(e) => {
                                    const newHr = e.currentTarget.textContent;
                                    setHours(newHr);
                                }}
                                style={numbers}>00</p>
                            <p>Hours</p>
                        </div>
                        <div style={watch}>
                            <p
                                className="clock"
                                contentEditable
                                suppressContentEditableWarning={true}
                                onInput={(e) => {
                                    const newMin = e.currentTarget.textContent;
                                    setMinutes(newMin);
                                }}
                                style={numbers}>00</p>
                            <p>Minutes</p>
                        </div>
                        <div style={watch}>
                            <p
                                className="clock"
                                contentEditable
                                suppressContentEditableWarning={true}
                                onInput={(e) => {
                                    const newSec = e.currentTarget.textContent;
                                    setSeconds(newSec);
                                }}
                                style={numbers}>00</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSet}>Set</button>
                    </div>
                </div>}


        </div>
    );
}
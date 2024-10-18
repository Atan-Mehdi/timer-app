import { useEffect, useRef, useState } from "react";


const style = {
    display: "flex",
    justifyContent: "center",
    gap: "100px"
}

const numbers = {
    fontSize: "50px"
}

const watch = {
    display: "flex",
    flexDirection: "column"
}

export default function StartTimer({ hr, min, sec }) {
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);
    const [hours, setHours] = useState(hr);
    const timerRef = useRef(0);

    useEffect(function () {
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
    }, []);

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
    // useEffect(function () {

    // }, [minutes]);

    return (
        <div>
            <h1>
                Timer has started
            </h1>

            <div style={style}>
                <div style={watch}>
                    <p style={numbers}>{hours}</p>
                    <p>Hours</p>
                </div>
                <div style={watch}>
                    <p style={numbers}>{minutes}</p>
                    <p>Minutes</p>
                </div>
                <div style={watch}>
                    <p style={numbers}>{seconds}</p>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    );
}
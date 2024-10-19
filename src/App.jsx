import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SetTime from './components/SetTime';
import StartTimer from './components/StartTimer';

function App() {

  const hrRef = useRef(0);
  const minRef = useRef(null);
  const secRef = useRef(null);

  hrRef.current = 12;
  minRef.current = 12;
  secRef.current = 12;



  return (
    <div>
      {/* {editState &&
        <div>
          <h1>The Timer App</h1>

          <SetTime
            editState={editState}
            setEditState={setEditState}
            hrRef={hrRef}
            minRef={minRef}
            secRef={secRef}
          />
        </div>
      } */}

      {/* {hrRef.current} */}


      {/* {!editState && <StartTimer hr={hrRef.current} min={minRef.current} sec={secRef.current} editState={editState} setEditState={setEditState} />} */}
      <StartTimer hr={hrRef.current} min={minRef.current} sec={secRef.current} />
    </div>
  );
}

export default App

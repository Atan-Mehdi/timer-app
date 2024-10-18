import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SetTime from './components/SetTime';
import StartTimer from './components/StartTimer';

function App() {
  const [editState, setEditState] = useState(true);
  const hrRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);

  return (
    <div>
      {editState &&
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
      }


      {!editState && <StartTimer hr={hrRef.current.value} min={minRef.current.value} sec={secRef.current.value} />}

    </div>
  );
}

export default App

// const [count, setCount] = useState(0);
// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )
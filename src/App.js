import React, { useState } from 'react';
import background from './assets/lord_rings.png';
import { Spinner } from './components/Spinner';
import { Modal } from './components/Modal';
import './App.css';

function App() {
  const [ directions, setDirections ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ report, setReport ] = useState(null);
  
  const submit = () => {
    try {
      setLoading(true);
      fetch('http://localhost:8000', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(directions)
        }
      )
        .then(async(response) => {
          setLoading(false);
          const result = await response.json();
          setReport(result)
        })
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }
  
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      {
        loading ?
          <Spinner /> :
          <>
            {
              report &&
              <Modal
                status={report}
                tryAgain={() => {
                  setDirections([]);
                  setReport(null);
                }}
              />
            }
            <span className="steps-count">Steps Counter: {directions.length}</span>
            <div className="directions-container">
              <button onClick={() => setDirections([ ...directions, 'n' ])} className="north" title="Step to North">
                &#8673;
              </button>
              <button onClick={() => setDirections([ ...directions, 'w' ])} className="west" title="Step to West">
                &#8672;
              </button>
              <button onClick={() => setDirections([])} className="refresh" title="Reset">
                &#x21bb;
              </button>
              <button onClick={() => setDirections([ ...directions, 's' ])} className="south" title="Step to South">
                &#8675;
              </button>
              <button onClick={() => setDirections([ ...directions, 'e' ])} className="east" title="Step to East">
                &#8674;
              </button>
            </div>
            <button className="submit" onClick={submit}>Start... !</button>
          </>
      }
    </div>
  );
}
export default App;

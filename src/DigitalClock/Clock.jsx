import React, {useState} from 'react';
import './Clock.css';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [Ctime, setCtime] = useState(time);
  
    const Updated = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
    };
  
    setInterval(Updated, 1);
    return(
      <>
      <div className='main-div'>
        <h1> {Ctime} </h1>
        <button > Diital Clock </button>
        </div>
      </>
    );
}

export default Clock;
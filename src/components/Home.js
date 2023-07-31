import React, { useEffect, useState } from 'react';
// import Main from '/src/Main.css';
const Home = () => {
  const [uidata, setuidata] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/api/data')
      .then(response => response.json())
      .then(data => setuidata(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const formatTime = (timeObject) => {
    return `${timeObject.Hours}:${timeObject.Minutes}:${timeObject.Seconds}`;
  };
  return (
    <div>
      <h1>Logi - Travel - Booking</h1>
      <ul>
        {uidata.map(train => (
          <li key={train.id}>
            <div className='batch'>
                <div className='batchinside'>
                <b>Train :- </b>{train.trainName} 
                <br/>
                <b>Train Number :- </b>{train.trainNumber}
                <br/>
                <b>Delayed By :- </b>{train.delayedBy}
                

                

                

                </div>
                <div className='dept'>
                    <b>Train Departs At :  </b>{formatTime(train.departureTime)}
                </div>
                <div className='seats'>
                    <b>Seats Available : </b><br/>Sleeper : {train.seatsAvailable.sleeper}<br/>
                    AC : {train.seatsAvailable.AC}
                </div>
                <div className='seats2'>
                    Price  : <b>{train.price.sleeper}</b>
                </div>
                
            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


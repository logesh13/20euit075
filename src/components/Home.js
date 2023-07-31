import React, { useEffect, useState } from 'react';

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
      <h1>Train Information</h1>
      <ul>
        {uidata.map(train => (
          <li key={train.id}>
            {train.trainName} - Departure Time: {formatTime(train.departureTime)}
            {train.seatsAvailable }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;



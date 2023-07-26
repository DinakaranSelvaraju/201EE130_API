import React, { useState } from 'react';

const TrainRegistrationForm = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const handleFormSubmit = async (e) => {
   

    const trainData = { trainNumber, origin, destination };

    try {
      const response = await fetch('/api/trains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

     
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Train Number"
        value={trainNumber}
        onChange={(e) => setTrainNumber(e.target.value)}
      />
      <button type="submit">Register Train</button>
    </form>
  );
};

export default TrainRegistrationForm;

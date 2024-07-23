import React, { useEffect, useState } from 'react';
import { fetchSeats } from '../api';

const SeatSelector = ({ onSelect }) => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const getSeats = async () => {
      try {
        const seats = await fetchSeats();
        setSeats(seats);
      } catch (err) {
        console.error('Failed to fetch seats:', err);
      }
    };
    getSeats();
  }, []);

  return (
    <div>
      <h2>Select a Seat</h2>
      <ul>
        {seats.map((seat) => (
          <li key={seat.id}>
            <button
              onClick={() => onSelect(seat)}
              disabled={seat.status === 'reserved'}
            >
              Seat {seat.id} ({seat.status})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeatSelector;

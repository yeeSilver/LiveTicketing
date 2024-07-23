import React, { useState } from 'react';
import SeatSelector from './components/SeatSelector';
import PaymentForm from './components/PaymentForm';
import PaymentStatus from './components/PaymentStatus';

const App = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [payment, setPayment] = useState(null);

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handlePaymentSuccess = (paymentData) => {
    setPayment(paymentData);
    setSelectedSeat(null); // Clear seat selection after successful payment
  };

  return (
    <div>
      <h1>Ticket Booking System</h1>
      {!selectedSeat && <SeatSelector onSelect={handleSeatSelect} />}
      {selectedSeat && (
        <PaymentForm seat={selectedSeat} onSuccess={handlePaymentSuccess} />
      )}
      {payment && <PaymentStatus payment={payment} />}
    </div>
  );
};

export default App;

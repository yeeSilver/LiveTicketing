import React, { useState } from 'react';
import { processPayment } from '../api';

const PaymentForm = ({ seat, onSuccess }) => {
  const [paymentId, setPaymentId] = useState('');
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await processPayment({ paymentId, seatId: seat.id, userId, amount });
      if (result.message === 'Payment request received') {
        onSuccess({ paymentId, seatId: seat.id, amount });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred while processing the payment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Payment ID"
        value={paymentId}
        onChange={(e) => setPaymentId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Pay</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default PaymentForm;

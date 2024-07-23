import React from 'react';

const PaymentStatus = ({ payment }) => {
  return (
    <div>
      <h2>Payment Status</h2>
      <p>Payment ID: {payment.paymentId}</p>
      <p>Seat ID: {payment.seatId}</p>
      <p>Amount: ${payment.amount}</p>
    </div>
  );
};

export default PaymentStatus;

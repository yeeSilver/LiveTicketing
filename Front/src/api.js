const API_URL = 'http://localhost:5000/api';

export const fetchSeats = async () => {
  const response = await fetch(`${API_URL}/seats`);
  return response.json();
};

export const processPayment = async (paymentData) => {
  const response = await fetch(`${API_URL}/payments/process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData),
  });
  return response.json();
};

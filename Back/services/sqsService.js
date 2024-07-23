const AWS = require('aws-sdk');
const sqs = new AWS.SQS({ region: 'your-region' });

const QUEUE_URL = 'your-sqs-queue-url';

const sendMessageToSQS = async (messageBody) => {
  const params = {
    QueueUrl: QUEUE_URL,
    MessageBody: JSON.stringify(messageBody),
  };

  try {
    await sqs.sendMessage(params).promise();
  } catch (err) {
    console.error('Error sending message to SQS:', err);
    throw err;
  }
};

module.exports = { sendMessageToSQS };

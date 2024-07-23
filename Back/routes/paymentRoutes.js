//CRUD
const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/paymentController');

// // 사용자 정보 가져오기
// router.get('/:id', userController.getUser);

// // 사용자 생성
// router.post('/', userController.createUser);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/paymentController');

router.post('/process', processPayment);

module.exports = router;


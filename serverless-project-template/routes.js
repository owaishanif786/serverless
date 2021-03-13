const HelloController = require("./controllers/HelloController");

const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => res.status(200).send('ok'))
router.get('/hello', HelloController.sayHello)

module.exports = router;
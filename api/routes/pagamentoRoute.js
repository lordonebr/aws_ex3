const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamentoController')

router.get('/', controller.get);
router.post('/:idPedido', controller.post);

module.exports = router;
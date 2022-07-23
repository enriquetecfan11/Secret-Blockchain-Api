const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apicontroller');

router
    .get('/works', apiController.istWorks)
    .get('/blocks', apiController.getAllBlocks)
    .post('/blocks', apiController.createBlock)
    .get('/blocks/:id', apiController.getOneBlock)
    .delete('/blocks/:id', apiController.deleteBlock)
    .delete('/blocks', apiController.deleteAllBlocks)
    .put('/blocks/:id', apiController.updateBlock);
    


module.exports = router;
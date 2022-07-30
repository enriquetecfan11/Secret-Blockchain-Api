const apiService = require('../services/apiservices');

const istWorks = (req, res) => {
    res.send('API works');
}

const getAllBlocks = (req, res) => {
}


const createBlock = (req, res) => {
    const id = req.body.id;
    const data = req.body.data;
    const hash = req.body.hash;

    const body = req.body;

    const newBlock = {
        id: body.id,
        data: body.data,
        hash: body.hash,
        previousHash: body.previousHash,
        timestamp: body.timestamp,
        nonce: body.nonce
    }

    // Send status code 200 to indicate success
    const insertedBlock = apiService.createBlock(newBlock);
    res.status(201).send({status: "Ok", data: insertedBlock});


}

const getOneBlock = (req, res) => {
}

const deleteBlock = (req, res) => {

}


const deleteAllBlocks = (req, res) => {
}

const updateBlock = (req, res) => {

}

module.exports = {
    getAllBlocks,
    createBlock,
    getOneBlock,
    deleteBlock,
    deleteAllBlocks,
    updateBlock,
    istWorks
}

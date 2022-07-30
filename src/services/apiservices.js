const SHA256 = require("crypto-js/sha256");
const { v4:uuid } = require("uuid");

const databaseSecret = require("../database/secret");

const createBlock = (newBlock) => {
    // Get the id and data for the new block
    const data = newBlock.data;
    
    // Create the hash, timestamp, nonce
    const id = uuid();
    const hash = SHA256(id + data).toString();
    const timestamp = new Date().getTime().toString().slice(0, -3);
    const nonce = Math.floor(Math.random() * 10000);

    // Create the block
    const savedBlock = {
        id: id,
        data: data,
        hash: hash,
        timestamp: timestamp,
        nonce: nonce
    }

    // Save the block to the database
    databaseSecret.createBlock(savedBlock);

    // Return the block
    return savedBlock;
}

const getAllBlocks = () => {
    console.log("Getting all blocks");
}

const getOneBlock = (id) => {
    console.log("Getting block with id: " + id);
}

const deleteBlock = (id) => {
    console.log("Deleting block with id: " + id);
}

const deleteAllBlocks = () => {
    console.log("Deleting all blocks");
}

const updateBlock = (id, data) => {
    console.log("Updating block with id: " + id);
}

module.exports = {
    createBlock,
    getAllBlocks,
    getOneBlock,
    deleteBlock,
    deleteAllBlocks,
    updateBlock
}
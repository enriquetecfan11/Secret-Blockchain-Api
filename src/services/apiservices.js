const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");

const createBlock = (id) => {
    console.log("Creating block with id: " + id);
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
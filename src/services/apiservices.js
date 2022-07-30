const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");

const createBlock = (newBlock) => {
    const insertedBlock = {
        ...newBlock,
        timestamp: new Date().getTime().toString().slice(0, -3),
        hash: SHA256(JSON.stringify(newBlock)).toString(),
        nonce: 0,
        previousHash: "0",
        data: hex2ascii(newBlock.data),
    }
    //console.log("Creating block: " + JSON.stringify(insertedBlock));
    return insertedBlock;
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
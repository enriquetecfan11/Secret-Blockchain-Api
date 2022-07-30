const DB = require('./db.json')
const {saveToDatabase }  = require('./utils');

const getAllBlocks = () => {
};

const createBlock = (savedBlock) => {
  // Savedblock to json stringify
  const jsonBlock = JSON.stringify(savedBlock);

  // Save the block to the database
  saveToDatabase(jsonBlock);
  
  // Save the block to the database
  saveToDatabase(DB);
  // Return the block
  return savedBlock;
};

module.exports = {
  createBlock,
  getAllBlocks,
};
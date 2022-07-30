const fs = require("fs");

const saveToDatabase = (DB) => {
    // Save the block to the database
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB));

    console.log("Block saved to database" + DB);

    // Return the block
    return DB;
    
}


module.exports = { saveToDatabase };

const express = require("express");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

const express = require("express");
const apiRoutes = require("./routes/apiroutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/", apiRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});



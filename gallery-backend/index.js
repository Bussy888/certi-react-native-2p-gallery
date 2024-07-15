const express = require("express");
const bodyParser = require("body-parser");
const imageRoutes = require("./routes/image");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use("/image", imageRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


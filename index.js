const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json("Hello World!");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

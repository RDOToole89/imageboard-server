const express = require("express");
const imageRouter = require("./routers/imageRouter");
const userRouter = require("./routers/userRouter");
const app = express();

const PORT = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// Routers
app.use("/images", imageRouter);
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.json("Hello World!");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

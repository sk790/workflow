import exprees from "express";

const app = exprees();

app.use("/", (req, res) => {
  res.send("Hello World saurabh feature");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
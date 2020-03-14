const express = require("express");
const path = require("path");

const distDir = "../client/build";
const app = express();

app.use(express.static(path.join(__dirname, distDir)));

app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, `${distDir}/index.html`));
});

app.listen(process.env.PORT || "5000", () => {
  console.log(`Server started on port`);
});

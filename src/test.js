const path = require("path");
const fs = require("fs");
fs.writeFile("./testdata/data.json", JSON.stringify("books"), err => {
  if (err) {
    console.log(err);
  }
});

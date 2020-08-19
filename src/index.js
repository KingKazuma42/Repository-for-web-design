// // var http = require('http');
// // var fs   = require('fs');
// // var path = require('path');
// // var mime = {
// //   ".html": "text/html",
// //   ".css":  "text/css"
// //   // 読み取りたいMIMEタイプはここに追記
// // };
// //まずpython-shellモジュールを読み込む
// var { PythonShell } = require('python-shell');
// const envelope = {"latitude":"15","longitude":"45","spot":"ああ"};
//
// let options = {
//   mode: 'text',
//   pythonPath: 'python/python', // which python で表示された結果を指定してください！
//   pythonOptions: ['-u'], // get print results in real-time
//   scriptPath: 'python/',
// };
//
// PythonShell.run('test.py', options, function (err, results) {
//   if (err) throw err;
//   console.log('results: %j', results);
// });
//
// /*
//  * サーバ側メイン処理
//  */

const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(
  // データの読み込む処理
  // データの受け取りはGET
  router.get("/", (req, res, next) => {
    // カレントディレクトリのdata.jsonを読み込む
    fs.readFile( "./testdata/data.json", (err, fileContent) => {
      books = JSON.parse(fileContent);
      res.render("index", { title: "Book Reviews", books: books });
    });
  }),
  // データの書き込み
  // データの送信はPOST
  router.post("/", (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    // データがある場合は一度読み込み、受け取ったデータを上書きする
    fs.readFile("./testdata/data.json", (err, fileContent) => {
      if (!err) {
        let books = JSON.parse(fileContent);
        // 追加のデータを読み込んだデータに追加する
        books.push({ title: title, author: author });
        // データをファイルに書き込み
        fs.writeFile("./testdata/data.json", JSON.stringify(books), err => {
          if (err) {
            console.log(err);
          }
          res.redirect("/");
        });
      }
    });
  })

);

app.listen(8000, function() {
    console.log("Start!\n> http://localhost:8000/");
});

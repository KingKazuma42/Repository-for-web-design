enchant();  //enchant.jsを使う時のおなじない
var core;  //ゲーム画面の変数

window.onload = function() {  //一番最初に呼ばれる処理
    core = new Core(680, 480);  //ゲーム全体の初期化(横の大きさ, 縦の大きさ)
    core.fps = 60;  //FPSの設定
    core.rootScene.backgroundColor = "black";  //背景色の設定
    core.start();  //ゲーム開始準備ができた時に呼ぶ処理
}
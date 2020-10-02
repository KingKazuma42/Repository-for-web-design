# ------------------------------------------------------------------
#
#   hello.py
#
#                   Nov/09/2018
# ------------------------------------------------------------------
from flask import Flask, make_response
from flask_cors import CORS #追加
import json

app = Flask(__name__)
CORS(app)#追加
# ------------------------------------------------------------------
@app.route("/")
def hello():
    str_out = '{ "messeage" : "Hello World!"}'
    return str_out
@app.route("/good")
def hello2(get_text):
    str_out = '{ "messeage" : "%s"}' % get_text
    return str_out
# ------------------------------------------------------------------
if __name__ == "__main__":
    app.run()
#
# ------------------------------------------------------------------

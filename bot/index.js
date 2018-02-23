var express = require("express");
var request = require('request');
var PORT = 4000 || process.env.PORT;
var app = express();

var status = {
    nickname: "かねこ",
    nickname_y: "かねこ",
    sex: "男",
    bloodtype: "A",
    age: 40,
    constellations: "射手座",
    place: "東京"
};

app.get("/",function(req,res){
    res.sendfile("index.html");
})
app.get("/api",function(req,res){
    var value = req.query.text, // 会話APIに送るテキストデータ
            url = "https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY=",
            token = process.env.DOCOMO_API_KEY; // 環境変数を使っています。

    status.utt = value;

    var param = {
        body: JSON.stringify(status),
        "Content-Type": "application/json"
    }

    request.post(url+token,param,function(err,response,data){
        if (err) throw err;
        var body = JSON.parse(data);
        status.context = body.context;
        body.utt = value == "バイバイ" ? "またねー！" : body.utt // バイバイというと終わるようにする
        res.json({
            res: body.utt
        })
    });

})

app.listen(PORT,function(){
    console.log("app is http://localhost:"+PORT)
})

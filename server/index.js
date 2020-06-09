const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/dev");
const FakeDb = require("./fake-db");
const productRouter = require("./routes/products")



//---- products表示リクエスト時の挙動（res）
app.use("/api/v1/products", productRouter);


//---- マングースでMongoDBと接続
mongoose.connect(config.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb();
    }
);

//---- 本番用ポート番号か暫定の3001
const PORT = process.env.PORT || '3001';

app.listen(PORT,function(){
    console.log("plug!")
});

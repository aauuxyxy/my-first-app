/*

type = 型
requierd = 入力必須かどうか
max = 最大文字数

*/

// mongooseによるデータの　取り出し/保存　スキーマ（このモジュールをインポートすると、変数にmongoDBのデータが入ります。）

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//   author: ObjectId,
  coverImage: {type:String, required:true, max:(60,'最大60文字まで入力できます。')},
  name: String,
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingText1: String,
  headingText2: String,
  headingText3: String,
});

module.exports = mongoose.model('Product',ProductSchema);

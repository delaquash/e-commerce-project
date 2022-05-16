const  mongoose  = require("mongoose");
const { boolean } = require("webidl-conversions");

 const ProductSchema = new mongoose.Schema({
     title: {
         type: String,
         required: true,
         unique: true
     },
     desc: {
        type: String,
        required: true,
     },
     categories: {
        type: Array,
     },
     img: {
        type: String,
        required: true,
     },
     size: {
        type: String,
     },
     color: {
        type: String,
     },
     price: {
        type: Number,
        required: true,
     }},
      {timeStamps : true}
 )

 module.exports = mongoose.model("Product",ProductSchema)
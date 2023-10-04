const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
     {
          name: {
               type: String,
               required: [true,"Nama harus diisi"]
          },
          stock: {
               type: Number,
               required: [true,"Nama harus diisi"],
               default: 0
          },
          harga: {
               type: Number,
               required: [true,"Harga harus diisi"]
          },
          gambar: {
               type: String,
               required: [true,"Gambar harus diisi"]
          }
     },

     { timesstamps: true }
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

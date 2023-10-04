const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
     {
          nama: {
               type: String,
               required: [true,"Nama harus diisi"]
          },
          stock: {
               type: Number,
               required: [true,"Stock harus diisi"],
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

     { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

// Validation create product middleware
const validationProduct = (req, res, next) => {
     const { nama, stock, harga, gambar } = req.body;

     if (!nama || !stock || !harga || !gambar) {
          return res.status(400).json({ message: "Semua harus diisi !" });
     }

     next();
}

module.exports = {
     validationProduct,
}

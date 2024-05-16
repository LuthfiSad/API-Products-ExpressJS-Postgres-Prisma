const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const productController = require("./product/product.controller");

app.use("/products", productController);

app.use("/", (req, res) => {
  res.send(`<p>Selamat datang di API Products Menggunakan Express Postgresql dan Prisma, untuk link nya : <br>
  <a href="http://localhost:${PORT}/products">http://localhost:${PORT}/products</a></p>
  `);
})

app.listen(PORT, () => {
  console.log("Express API running in : http://localhost:" + PORT);
});

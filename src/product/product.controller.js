// Layer untuk handle request dan response
// Biasanya juga handle validasi body

const express = require("express");

const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
} = require("./product.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({
      status: "success",
      data: products,
      message: "Products retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve products",
      error: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await getProductById(productId);

    res.status(200).json({
      status: "success",
      data: product,
      message: "Product retrieved successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Invalid product ID",
      error: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const product = await createProduct(newProductData);

    res.status(201).json({
      status: "success",
      data: product,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to create product",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);

    await deleteProductById(productId);

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to delete product",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    if (
      !(
        productData.image &&
        productData.description &&
        productData.name &&
        productData.price
      )
    ) {
      return res.status(400).json({
        status: "error",
        message: "Some fields are missing",
      });
    }

    const product = await editProductById(productId, productData);

    res.status(200).json({
      status: "success",
      data: product,
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Failed to update product",
      error: err.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    const product = await editProductById(productId, productData);

    res.status(200).json({
      status: "success",
      data: product,
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Failed to update product",
      error: err.message,
    });
  }
});

module.exports = router;

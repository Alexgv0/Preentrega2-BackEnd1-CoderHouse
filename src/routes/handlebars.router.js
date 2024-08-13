const express = require("express");
const router = express.Router();

const ProductManager = require("../../productManager");
const pm = new ProductManager();

router.get("/", async (req, res) => {
    const products = await pm.readData();
    res.render("index", { title: "Productos", products });
});

module.exports = router;

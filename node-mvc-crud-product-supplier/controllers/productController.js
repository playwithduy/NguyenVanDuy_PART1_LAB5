const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Hiển thị tất cả sản phẩm
exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find().populate('supplierId').sort({ createdAt: -1 });
        res.render('products/index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Hiển thị form tạo sản phẩm mới
exports.getCreateProduct = async(req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('products/new', { suppliers });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Tạo sản phẩm mới
exports.createProduct = async(req, res) => {
    try {
        const { name, price, description, supplierId } = req.body;
        const product = new Product({ name, price, description, supplierId });
        await product.save();
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Hiển thị form chỉnh sửa sản phẩm
exports.getEditProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const suppliers = await Supplier.find();
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('products/edit', { product, suppliers });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Cập nhật sản phẩm
exports.updateProduct = async(req, res) => {
    try {
        const { name, price, description, supplierId } = req.body;
        await Product.findByIdAndUpdate(req.params.id, { name, price, description, supplierId });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Xóa sản phẩm
exports.deleteProduct = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
const Supplier = require('../models/Supplier');

// Lấy tất cả nhà cung cấp
exports.getAllSuppliers = async(req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('suppliers/index', { suppliers });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Form tạo mới
exports.getCreateSupplier = (req, res) => {
    res.render('suppliers/new');
};

// Tạo mới
exports.createSupplier = async(req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.redirect('/suppliers');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Form edit
exports.getEditSupplier = async(req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).send("Supplier not found");
        res.render('suppliers/edit', { supplier });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update
exports.updateSupplier = async(req, res) => {
    try {
        await Supplier.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/suppliers');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete
exports.deleteSupplier = async(req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.redirect('/suppliers');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
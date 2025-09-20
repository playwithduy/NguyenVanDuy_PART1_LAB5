const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');
require('dotenv').config();

// Sửa dòng kết nối MongoDB để có giá trị mặc định
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/supplier_product_db';

// Kết nối MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedData = async() => {
    try {
        console.log('Bắt đầu thêm dữ liệu mẫu...');
        console.log('Kết nối đến:', MONGODB_URI);

        // Xóa dữ liệu cũ
        await Supplier.deleteMany({});
        await Product.deleteMany({});
        console.log('Đã xóa dữ liệu cũ');

        // Tạo dữ liệu mẫu cho nhà cung cấp
        const suppliers = await Supplier.insertMany([{
                name: 'Công ty TNHH ABC',
                address: '123 Đường Nguyễn Văn Linh, Quận 7, TP.HCM',
                phone: '02838223344'
            },
            {
                name: 'Công ty CP XYZ',
                address: '456 Đường Lê Lợi, Quận 1, TP.HCM',
                phone: '02839223355'
            },
            {
                name: 'Công ty TNHH DEF',
                address: '789 Đường Cách Mạng Tháng 8, Quận 3, TP.HCM',
                phone: '02838226677'
            }
        ]);
        console.log('Đã thêm nhà cung cấp');

        // Tạo dữ liệu mẫu cho sản phẩm
        await Product.insertMany([{
                name: 'Laptop Dell XPS 13',
                price: 28990000,
                description: 'Laptop cao cấp với màn hình 13 inch, CPU Intel Core i7',
                supplierId: suppliers[0]._id
            },
            {
                name: 'iPhone 14 Pro Max',
                price: 32990000,
                description: 'Điện thoại flagship của Apple với camera 48MP',
                supplierId: suppliers[1]._id
            },
            {
                name: 'Samsung Galaxy S23 Ultra',
                price: 27990000,
                description: 'Điện thoại Android mạnh mẽ với bút S-Pen',
                supplierId: suppliers[1]._id
            },
            {
                name: 'MacBook Pro 16 inch',
                price: 58990000,
                description: 'Laptop chuyên nghiệp cho công việc sáng tạo',
                supplierId: suppliers[2]._id
            },
            {
                name: 'Tai nghe Sony WH-1000XM5',
                price: 7990000,
                description: 'Tai nghe chống ồn tốt nhất thị trường',
                supplierId: suppliers[0]._id
            }
        ]);
        console.log('Đã thêm sản phẩm');

        console.log('Dữ liệu mẫu đã được thêm thành công!');
        process.exit(0);
    } catch (error) {
        console.error('Lỗi khi thêm dữ liệu mẫu:', error);
        process.exit(1);
    }
};

seedData();
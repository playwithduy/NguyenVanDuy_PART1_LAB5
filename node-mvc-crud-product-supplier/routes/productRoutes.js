const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - supplierId
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         price:
 *           type: number
 *           description: The price of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         supplierId:
 *           type: string
 *           description: The ID of the supplier
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the product was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the product was updated
 *       example:
 *         _id: 64f1a2b3c4d5e6f7a8b9c0d2
 *         name: Product A
 *         price: 100000
 *         description: High quality product
 *         supplierId: 64f1a2b3c4d5e6f7a8b9c0d1
 *         createdAt: 2023-09-01T10:00:00.000Z
 *         updatedAt: 2023-09-01T10:00:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /products/new:
 *   get:
 *     summary: Get form to create a new product
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The form to create a new product
 */
router.get('/new', productController.getCreateProduct);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/', productController.createProduct);

/**
 * @swagger
 * /products/{id}/edit:
 *   get:
 *     summary: Get form to edit a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The form to edit a product
 *       404:
 *         description: Product not found
 */
router.get('/:id/edit', productController.getEditProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully updated
 *       404:
 *         description: Product not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', productController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The product was successfully deleted
 *       404:
 *         description: Product not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the supplier
 *         name:
 *           type: string
 *           description: The name of the supplier
 *         address:
 *           type: string
 *           description: The address of the supplier
 *         phone:
 *           type: string
 *           description: The phone number of the supplier
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the supplier was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the supplier was updated
 *       example:
 *         _id: 64f1a2b3c4d5e6f7a8b9c0d1
 *         name: ABC Company
 *         address: 123 Main St, City
 *         phone: 0123456789
 *         createdAt: 2023-09-01T10:00:00.000Z
 *         updatedAt: 2023-09-01T10:00:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: The suppliers managing API
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Returns the list of all suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: The list of suppliers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 */
router.get('/', supplierController.getAllSuppliers);

/**
 * @swagger
 * /suppliers/new:
 *   get:
 *     summary: Get form to create a new supplier
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: The form to create a new supplier
 */
router.get('/new', supplierController.getCreateSupplier);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Create a new supplier
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: The supplier was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/', supplierController.createSupplier);

/**
 * @swagger
 * /suppliers/{id}/edit:
 *   get:
 *     summary: Get form to edit a supplier
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The supplier ID
 *     responses:
 *       200:
 *         description: The form to edit a supplier
 *       404:
 *         description: Supplier not found
 */
router.get('/:id/edit', supplierController.getEditSupplier);

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Update a supplier
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The supplier ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: The supplier was successfully updated
 *       404:
 *         description: Supplier not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', supplierController.updateSupplier);

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Delete a supplier
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The supplier ID
 *     responses:
 *       200:
 *         description: The supplier was successfully deleted
 *       404:
 *         description: Supplier not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
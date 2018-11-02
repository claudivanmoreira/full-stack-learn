const mongoose = require('mongoose');
const requireDir = require('require-dir');

requireDir('../models');

const Product = mongoose.model("Product");

mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

module.exports = {
    async list(req, res) {
        const { page = 1} = req.query;
        const products = await Product.paginate({},{page, limit: 10});
        return res.json(products);
    },
    async save(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async find(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },
    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
}
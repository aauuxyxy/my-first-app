const express = require("express");
const router = express.Router();
const products = require("../model/product");

router.get('',function(req,res){
    products.find({},function(err,foundProducts){
        return res.json(foundProducts);
    });
});

router.get('/:productId', function (req, res) {
    const productId = req.params.productId
    products.findById(productId, function (err, foundProduct) {
        if(err){
            return res.status(422).send({errors: [{title: "Product error",detaile: "Product not found"}]})
        }

        return res.json(foundProduct);
    });
});

module.exports = router;
const  router  = require("express").Router();
const {allproduct,updateProduct} =require('../controllers/product.js')
router.route("/allproduct").get(allproduct); 
router.route("/updateproduct").put(updateProduct); 
module.exports = router;
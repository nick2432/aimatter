const Product = require("../models/product");
exports.allproduct = async (req, res) => {
    try {
      const product = await Product.find({});
  
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.body.Id);
      const {Id,customerValue} = req.body;
      if (Id) {
            product.count=product.count+1;
            product.customer.push(customerValue);
      }
      await product.save();
      res.status(200).json({
        success: true,
        message: "count Updated",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

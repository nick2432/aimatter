const  router  = require("express").Router();
const {creatuser,getByName} =require('../controllers/user.js')
router.route("/SignIN").post(creatuser); 
router.route("/getbyemail").post(getByName); 
module.exports = router;
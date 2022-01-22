const express=require("express");

const { userCart,userGetCart,removeCart } = require("../controllers/userService");
const { authCheck } = require("../middleware/authCheck");
const router=express.Router();


router.post("/user/cart",authCheck,userCart);
router.get("/user/cart",authCheck,userGetCart);
router.delete("/user/cart",authCheck,removeCart);
module.exports=router;
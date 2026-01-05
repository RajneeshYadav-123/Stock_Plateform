const express = require("express")
const router = express.Router();

const {signUp,login}=require('../Controller/User');
const {auth}=require('../Middleware/User');


router.post("/login",login);
router.post("/signup",signUp);

module.exports = router;





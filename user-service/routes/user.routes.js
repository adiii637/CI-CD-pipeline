const express=require("express");
const {createUser}=require("../controllers/user.controller");
const router=express.Router();

//endpoints

router.post("/create-user",createUser)

module.exports=router
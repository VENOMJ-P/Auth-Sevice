const express = require('express');
const UserController = require("../../controller/user-controller");
const router = express.Router();

router.post('/signup',UserController.create);
router.delete('user/:id',UserController.destory);
router.get('user/:id',UserController.get)

router.post('/signin',UserController.signIn);
module.exports=router;
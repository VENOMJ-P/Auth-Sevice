const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req,res) => {
    try {
        const user = await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            success:true,
            data:user,
            message: 'Successfull created a new user',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data:{},
            success:false,
            err:error
        });
    }
}

module.exports = {
    create
}
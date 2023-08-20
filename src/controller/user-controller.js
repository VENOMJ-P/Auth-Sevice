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

const destory = async (req,res) => {
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(200).json({
            success:true,
            data:response,
            message: 'Successfull delete a user',
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

const get = async (req,res) => {
    try {
        const user = await userService.getById(req.params.id);
        return res.status(200).json({
            success:true,
            data:user,
            message: 'Successfull get user',
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
    create,
    destory,
    get
}
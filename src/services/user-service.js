const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository=require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverConfig')

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer;");
            throw error;
        }
    }

    async destroy(id){
        try {
            const user = await this.userRepository.destory(id);
            console.log(user);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer;");
            throw error;
        }
    }

    async getById(id){
        try {
            console.log(id);
            const user = await this.userRepository.getById(id);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer;");
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY, {expiresIn: '1h'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation");
            throw error;
        }
    }

    checkPassword(userInputPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }
}

module.exports = UserService;
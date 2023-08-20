const UserRepository=require('../repository/user-repository');

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
}

module.exports = UserService;
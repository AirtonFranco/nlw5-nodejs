import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create( email: string ) {
        
        //const usersRepository = getCustomRepository(UsersRepository);
        
        //verifica se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email,
        })

        //Se exixtir retornar User
        if(userExists) {
            return userExists;
        }

        //Se não exitir salvar no banco de dados
        const user = this.usersRepository.create({
            email,
        })

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersService };
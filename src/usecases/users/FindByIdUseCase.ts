import { User } from "../../entities/User"
import { IUsersRepository } from "../../repositories/users/IUsersRepositories"
export class FindUserByIdUseCase {
    constructor(private UsersRepository: IUsersRepository){}
    
    async execute(id:string): Promise<Omit<User, 'password'>> {
        const user = await this.UsersRepository.findById(id)
        if(!user) throw new Error('Usuário não encontrado')
        const{ password, ...safeUser } = user
    }
}

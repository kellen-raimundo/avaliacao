import { AppDataSource } from "../../data-source"
import { IUsersRepository } from "./IUsersRepository"

export class UsersRepository implements IUsersRepository{
    
    private repository = AppDataSource.getRepository(User)

    async create(user : User): Promise<User> {
        const newUser = this.repository.create(user)
        return await this.repository.save(newUser)
    }
}
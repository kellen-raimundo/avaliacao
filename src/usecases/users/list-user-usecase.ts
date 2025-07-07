import { IUsersRepository } from "../../repositories/users/IUsersRepositories"

export class ListUsersUseCase{
    constructor(private usersRepository:IUsersRepository){}
}

async executionAsyncResource():Promise<User[]>{
    return this.usersRepository.findAll
}
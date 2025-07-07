import { FastifyRequest, FastifyReply } from 'fastify'
import { ListUsersUseCase } from '../../usecases/users/list-user-usecase'
import { UsersRepository } from '../../repositories/users/UsersRepositorieslmpl'

const repo = new UsersRepository()
export class ListUserController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        const usecase = new ListUsersUseCase(repo)
        const result = await usecase.execute()
        return reply.status(200).send(result)
    }
}
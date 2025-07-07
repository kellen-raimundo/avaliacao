import { FastifyRequest } from "fastify"
import { DeleteUserUseCase } from "../../usecases/users/DeleteUserUseCase"
import { UsersRepository } from "../../repositories/users/UsersRepositorieslmpl"

export class DeleteUserController {
    async handle(request: FastifyRequest<{ Params: {id: string }}>)
        try {
            const usecase = new DeleteUserUseCase(new UsersRepository)
            await usecase.execute(request.params.id)
            return reply.status(204).send()
        } catch (err:any) {
            return reply.status(404).send({error:err.mesage})
        }
}
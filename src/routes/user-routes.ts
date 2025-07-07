import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controllers/users/CreateUserController'

const createUserController = new CreateUserController()
export async function userRoutes(app:FastifyInstance){
    app.post('/users',createUserController.handle)
}

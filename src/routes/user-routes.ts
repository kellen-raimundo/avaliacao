import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controllers/users/CreateUserController'
import { ListUserController} from '../controllers/users/ListUserController'
import { FindUserByIdController } from '../controllers/users/FindUserByIdController'
import { UpdateUserController } from '../controllers/users/UpdateUserController'
import { DeleteUserController } from '../controllers/users/DeleteUserController'


const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const findByIdController = new FindUserByIdController()
const updateUserController = new UpdateUserController ()
const deleteUserController = new DeleteUserController ()


export async function userRoutes(app:FastifyInstance){
    app.post('/users', createUserController.handle)
    app.get('/users', listUserController.handle)
    app.get('/users/:id', findByIdController.handle)
    app.put('/users/:id', updateUserController.handle)
    app.delete('/users/:id', deleteUserController.handle)
}

import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import { userRoutes } from './routes/user-routes'

export async function startApp() {
    const app = Fastify ()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de dados inicializado')
        }
    ).catch((ex)=>{
        console.log('Erro de conexão do banco de dados', ex)
        process.exit(1)
    })


    app.register(userRoutes)
    return app
}
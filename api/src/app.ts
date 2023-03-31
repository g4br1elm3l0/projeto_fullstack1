import cors from "cors";
import express, { Application } from "express";
import contactRoutes from './routes/contact.routes';
import loginRoutes from './routes/login.routes';
import router from './routes/users.routes';


const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/users', router)
app.use('/login', loginRoutes)
app.use('/contacts', contactRoutes)





export default app
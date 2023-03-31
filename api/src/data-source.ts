import "dotenv/config";
import { DataSource } from "typeorm";
import { Contact } from './entities/contact.entity';
import { User } from "./entities/user.entity";
import { createUserandContact1680120613555 } from "./migrations/1680120613555-createUserandContact";
import { createContact1680120919441 } from "./migrations/1680120919441-createContact";
import { fixDelete1680132804904 } from './migrations/1680132804904-fixDelete';
import { fixEntitys1680282267629 } from "./migrations/1680282267629-fixEntitys";

const AppDataSource = new DataSource(

    process.env.NODE_ENV === "test" ?
        {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"]
        } :
        {
            type: "postgres",
            host: process.env.PGHOST,
            port: parseInt(process.env.PGPORT!),
            username: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            logging: true,
            synchronize: false,
            entities: [User, Contact],
            migrations: [createUserandContact1680120613555, createContact1680120919441, fixDelete1680132804904, fixEntitys1680282267629]
        }
)

export default AppDataSource
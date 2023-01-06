import express, {application, Request, Response} from "express";
import router from "./router/user.router";
import "dotenv/config"

//instanciation de express
const app = express()

// Parse le json
app.use(express.json())

// instance de express
const port = process.env.PORT

// instance du router de  express
app.use("/user",router);

// Définition du port pour le server
app.listen(port, () => {
    console.log(`Le server est lancé sur le port ${port}`)
})
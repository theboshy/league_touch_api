import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import leagueApiRoutes from "./routes/league.api.routes";
import cors from "cors";
require('dotenv').config()

const app = express()
const server = new Server(app)
app.use(bodyParser.json());

let corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions));
// routes

app.use("/league", leagueApiRoutes)


app.use(express.json())
const port = 3000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


import express, {urlencoded} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import checkDatabaseConnection from "./db/connection";
import {createServer} from 'http'
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json()); // It parses incoming requests with JSON payloads

/* It parses incoming requests with urlencoded payloads. 
For example, form submissions from a web page. 
The extended option allows for rich objects and arrays to be encoded into the 
URL-encoded format, allowing for a JSON-like experience with URL-encoded data. 
If set to false, it uses the querystring library instead of qs. 
The default value is true.*/
app.use(urlencoded({extended: true}));

app.use('/', routes)

app.get('/', (_req, res)=>{
    res.send("EcoSync server is up and running");
})

const httpServer = createServer(app);
httpServer.listen(PORT, async () => {
    await checkDatabaseConnection();
    console.log(`EcoSync server is running on port ${PORT}`);
})
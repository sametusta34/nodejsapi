import express  from 'express';
import bodyParser from 'body-parser';
import Router from './routes/routers.mjs';

export function startServer() { 
    const app = express();
 

    app.use(bodyParser.json());
    
    app.use(Router);
    

    return app;
 
}
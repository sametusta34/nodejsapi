import { startServer } from './server.mjs'; 
import dotenv from 'dotenv';

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'test';
const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const app = startServer();
const PORT =  process.env.API_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
import dotenv from 'dotenv';

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'test';
const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });
 

export default dotenv;
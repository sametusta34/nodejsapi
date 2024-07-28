import express from 'express';
const router = express.Router();
import homeRouter from './home.mjs';

router.use(homeRouter);

export default router;
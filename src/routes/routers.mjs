import express from 'express';
const router = express.Router();
import homeRouter from './home.mjs';
import tenantRouter from './tenant.mjs';

router.use(homeRouter);
router.use(tenantRouter)

export default router;
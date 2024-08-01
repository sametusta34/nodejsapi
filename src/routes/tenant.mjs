import express from 'express';
const router = express.Router();
import tenantController from '../controllers/tenant.mjs';

router.get('/api/tenants', tenantController.getAllTenants);

export default router;
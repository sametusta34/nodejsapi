import express from 'express';
const router = express.Router();
import tenantController from '../controllers/tenant.mjs';

router.get('/api/tenants', tenantController.getAllTenants);
router.get('/api/tenants/:id', tenantController.getTenantById);

export default router;
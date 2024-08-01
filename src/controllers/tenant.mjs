import TenantService from "../services/tenant.mjs"
export default {
    async getAllTenants(req, res) {
        try {
            const tenants = await TenantService.getAllTenants();   
            res.json(tenants);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
       
    },
    async getTenantById(req, res) {
        try {
            const tenantId = req.params.id;
            const tenant = await TenantService.getTenantById(tenantId);
            res.json(tenant);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}
import TenantService from "../services/tenant.mjs"
export default {
    async getAllTenants(req, res) {
        try {
            const tenants = await TenantService.getAllTenants();        
            res.json(tenants);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}
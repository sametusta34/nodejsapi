// mysql connection get all tenants

import  db  from '../configs/db.mjs';

//mysql connection
 

const TenantService = {};

TenantService.getAllTenants = async () => { 
    return new Promise((resolve, reject) => {
        
        db.query('SELECT * FROM tenants', (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
};


export default TenantService;
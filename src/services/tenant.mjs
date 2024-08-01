import db from "../configs/db.mjs";
import Tenant from "../models/tenant/tenant.mjs";
import ResponseCode from "../models/response/ResponseCode.mjs";
import ResponseDataList from "../models/response/ResponseDataList.mjs";
import ResponseData from "../models/response/ResponseData.mjs";

const TenantService = {};

//Return all tenants
TenantService.getAllTenants = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tenants", (err, results) => {
      if (err) {
        const response = new ResponseDataList(
          ResponseCode.ERROR,
          null,
          "Error while fetching tenants",
          err.message
        );
        reject(response);
      }
      const tenants = Tenant.fromRows(results);
      const response = new ResponseDataList(
        ResponseCode.SUCCESS,
        tenants,
        "Tenants fetched successfully"
      );
      resolve(response);
    });
  });
};

//Return tenant by id
TenantService.getTenantById = async (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tenants WHERE id = ?", [id], (err, results) => {
      if (err) {
        const response = new ResponseData(
          ResponseCode.ERROR,
          null,
          "Error while fetching tenant",
          err.message
        );
        reject(response);
      }
      if (results.length === 0) {
        const response = new ResponseData(
          ResponseCode.NOT_FOUND,
          null,
          "Tenant not found"
        );
        reject(response);
      }
      const tenant = Tenant.fromRow(results[0]);
      const response = new ResponseData(
        ResponseCode.SUCCESS,
        tenant,
        "Tenant fetched successfully"
      );
      resolve(response);
    });
  });
};

export default TenantService;

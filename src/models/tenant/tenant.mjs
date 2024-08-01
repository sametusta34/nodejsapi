class Tenant {
  constructor(
    id,
    tenants_company_name,
    tenants_parent_id,
    tenants_type,
    is_active
  ) {
    this.id = id;
    this.tenants_company_name = tenants_company_name;
    this.tenants_parent_id = tenants_parent_id;
    this.tenants_type = tenants_type;
    this.is_active = is_active;
  }

  static fromRow(row) {
    return new Tenant(
      row.id,
      row.tenants_company_name,
      row.tenants_parent_id,
      row.tenants_type,
      row.is_active
    );
  }

  static fromRows(rows) {
    return rows.map(row => Tenant.fromRow(row));
  }
}

export default Tenant;  
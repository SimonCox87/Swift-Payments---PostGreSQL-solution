const updateCustomerName = require("./updateCustomerName");
const updateCustomerStatus = require("./updateCustomerStatus");

// update handler function
module.exports = async function updateRecord(tableName, allowedColumns, id, updates, pool, io) {
    // whitelist of table names in order to validate tableName. control data being 
    // pushed to the database
    const allowedTables = ["customers", "companies", "contacts", "locations", "quotes"];
  
    // validate tableName against the whitelist of table names
    if (!allowedTables.includes(tableName)) {
      throw new Error("Invalid table name");
    }
  
    // validate columns
    const columnArray = Object.keys(updates);
  
    // check column array actually contains updates
    if (columnArray.length === 0) {
      throw new Error("No valid columns provided for update")
    }
    // get the name of the column so that we can place it in the query
    const column = columnArray[0];
  
    // check that the columns to be updated are allowed
    if (!allowedColumns.includes(column)) {
      throw new Error("No valid columns provided for update");
    };
  
    // create the values array for the query
    const values = Object.values(updates);
    
    // push the id to the values array so it can be used in the query
    values.push(id);
    
    // construct the query string
    const query = `UPDATE ${tableName} SET ${column} = $1 WHERE customer_id = $2 RETURNING *`;
  
    // execute the query
    const result = await pool.query(query, values);
    
    if (result.rowCount === 0) {
      throw new Error("Record not found");
    }
  
    if (column === "company_name") {
      const [newCustomerName, id] = values;
      await updateCustomerName(id, newCustomerName, pool)
    }
    if (column === "customer_status") {
      const [newCustomerStatus, id] = values;
      await updateCustomerStatus(id, newCustomerStatus, pool);
    }
  
    // Emit WebSocket event for the updated table
    io.emit(`update:${tableName}`, result.rows[0]);
  
    return result.rows[0];
  };


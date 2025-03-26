// function to update customer_name across all tables
module.exports = async function updateCustomerName(id, name, pool) {

    try {
      await pool.query("BEGIN")
  
      // run the queries on each table
      await pool.query("UPDATE customers SET company_name = $1 WHERE customer_id = $2", [name, id]);
      await pool.query("UPDATE companies SET company_name = $1 WHERE customer_id = $2", [name, id]);
      await pool.query("UPDATE contacts SET company_name = $1 WHERE customer_id = $2", [name, id]);
      await pool.query("UPDATE locations SET company_name = $1 WHERE customer_id = $2", [name, id]);
      await pool.query("UPDATE quotes SET company_name = $1 WHERE customer_id = $2", [name, id]);
      
      await pool.query("COMMIT");
  
      console.log(`customer_name : ${name} updated across all tables successfully!`);
      
    } catch (error) {
      await pool.query("ROLLBACK");
      console.error("Error updating company_name", error);
      
    }
   
  }


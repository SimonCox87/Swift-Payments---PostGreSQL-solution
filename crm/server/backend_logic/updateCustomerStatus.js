// function to update customer status across all tables

module.exports = async function updateCustomerStatus(id, status, pool) {
    try {
        await pool.query("BEGIN");

        // run the queries on each table
        await pool.query("UPDATE customers SET customer_status = $1 WHERE customer_id = $2", [status, id]);
        await pool.query("UPDATE companies SET customer_status = $1 WHERE customer_id = $2", [status, id]);
        await pool.query("UPDATE contacts SET customer_status = $1 WHERE customer_id = $2", [status, id]);
        await pool.query("UPDATE locations SET customer_status = $1 WHERE customer_id = $2", [status, id]);
        await pool.query("UPDATE quotes SET customer_status = $1 WHERE customer_id = $2", [status, id]);

        await pool.query("COMMIT");
        console.log(`customer_status : ${status} updated across all tables successfully!`);

    } catch (error) {
        await pool.query("ROLLBACK");
        console.error("Error updating customer_status", error);
    }
}
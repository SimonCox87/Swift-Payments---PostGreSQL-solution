import { useEffect } from "react";

// useEffect function to filter tables
const useFilterTables = (tableData, setFilteredData, filterStatus, dataLoaded) => {
    useEffect(() => {
        if (!dataLoaded) return;
        setFilteredData(
            filterStatus === "All"
            ? tableData
            : tableData.filter(
                (data) => data.customer_status === filterStatus
            ) 
        )
    }, [tableData, setFilteredData, filterStatus, dataLoaded]);
}

export default useFilterTables;    
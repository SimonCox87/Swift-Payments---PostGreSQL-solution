import { useEffect } from "react";

// useEffect function requires "use" prefix
const useTableSocket = (socket, tableName, setData, getTable, dataLoaded) => {
  useEffect(() => {
    if (!dataLoaded) return;
    // Define the update function used in websocket event
    const update = (updatedData) => {
      console.log(`Socket on for ${tableName}!`);

      // if add button is clicked an array of items is sent to server
      // in this instance we have to re-render whole table as new row is created
      // getTable() is called to display the whole table
      if (Array.isArray(updatedData)) {
        getTable(tableName);
      } else {
        // If individual updates are made (the type will be an object) call
        // setData state setter.
        setData((prev) =>
          prev.map((item) =>
            item.customer_id === updatedData.customer_id ? updatedData : item
          )
        );
      }
    };
    // define the remove function defined in the websocket event
    const remove = (deletedData) => {
      // filter out deleted customer  
      setData((prev) =>
        prev.filter((item) => item.customer_id !== deletedData.customer_id)
        );
    };

    // listening for socket events
    socket.on(`update:${tableName}`, update);
    socket.on(`delete:${tableName}`, remove);

    // clean up listeners when done.
    return () => {
        socket.off(`update:${tableName}`, update);
        socket.off(`delete:${tableName}`, remove);
    };
  }, [socket, tableName, setData, getTable, dataLoaded]);
};

export default useTableSocket;
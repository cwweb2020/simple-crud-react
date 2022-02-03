import React from "react";
import Row from "./Row";

const Table = ({ allData, deleteEmployee, editEmployee }) => {
   
    
 

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            allData.length > 0 ? allData.map((i, index) => (
                <Row key={index} data={i} index={index} deleteEmployee={deleteEmployee} editEmployee={editEmployee} />
            ))
            : <tr><td colSpan="4" className="text-center">No data</td></tr>
          }

        </tbody>
      </table>
    </>
  );
};

export default Table;

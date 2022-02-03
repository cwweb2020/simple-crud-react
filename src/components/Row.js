import React from "react";

const Row = ({ data, index, deleteEmployee, editEmployee }) => {
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.name}</td>
        <td>{data.lastname}</td>
        <td>{data.phone}</td>
        <td>{data.id}</td>
        <td>
            <button className="btn btn-primary me-2" onClick={()=> editEmployee(data.id)}>edit</button>
            <button className="btn btn-danger" onClick={()=> deleteEmployee(data.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Row;

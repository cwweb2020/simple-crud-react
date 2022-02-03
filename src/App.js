import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Form from "./components/Form";
import Table from "./components/Table";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [allData, setAllData] = React.useState([]);
  const [employeeToEdit, setEmployeeToEdit] = React.useState(null);
  const [isEdit, setIsEdit] = React.useState(false);
  const [employee, setEmployee] = React.useState(employeeToEdit || {
      name: "",
      lastname: "",
      phone: "",
      id: ""
  });



  const handleChange = (e) => {
     
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
       id: uuidv4()
    })
   
   // console.log(employee);
  };

  const handleSubmit = (e) => {
    //employee.id = uuidv4();
    e.preventDefault();
    setAllData([...allData, employee])
    e.target.reset();
  }

  // delete employee
  const deleteEmployee = (id) => {
   // console.log(id);
     const newData = allData.filter(i => i.id !== id);
      setAllData(newData);
  }

  // edit employee
  const editEmployee = (id) => {
    const editableEmployee = allData.find(i => i.id === id);
    setEmployeeToEdit(editableEmployee);
    setIsEdit(true);
  }
  const updateEmployeefn = () => {
    console.log(employeeToEdit);
    setAllData(allData.map(i => i.id === employeeToEdit.id ? employee : i));
    alert("Employee updated successfully");
    setIsEdit(false);
  }

  return (
    <>
      <section className="total-section">
        <div className="wrapper">
          <div className="container1">
            <Form handleChange={handleChange} handleSubmit={handleSubmit} isEdit={isEdit} employeeToEdit={employeeToEdit} updateEmployeefn={updateEmployeefn} />
          </div>
          <div className="container2">
             <Table allData={allData} deleteEmployee={deleteEmployee} editEmployee={editEmployee}  />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

import React from "react";

const Form = ({
  handleChange,
  handleSubmit,
  employeeToEdit,
  isEdit,
  updateEmployeefn,
}) => {
  //  console.log(editedEmployee);

  return (
    <>
      {" "}
      {isEdit ? <h3>Edit employee</h3> : <h3>Add employee</h3>}
      <form className="form-control mt-5 p-4" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          type="text"
          placeholder="name"
          className="form-control my-3"
          name="name"
          onChange={handleChange}
          value={isEdit ? employeeToEdit.name : ""}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          placeholder="lastname"
          className="form-control my-3"
          name="lastname"
          onChange={handleChange}
          value={isEdit ? employeeToEdit.lastname : ""}
        />
        <label>Phone</label>
        <input
          required
          type="number"
          placeholder="phone"
          className="form-control my-3"
          name="phone"
          onChange={handleChange}
          value={isEdit ? employeeToEdit.phone : ""}
        />
        {isEdit ? (
          <button
            className="btn btn-primary w-100 mt-4"
            type="button"
            onClick={updateEmployeefn}
          >
            Edit
          </button>
        ) : (
          <button className="btn btn-primary w-100 mt-4" type="submit">
            Add
          </button>
        )}
      </form>
    </>
  );
};

export default Form;

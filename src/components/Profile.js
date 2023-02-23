import React, { useState, Fragment } from "react";
import Forms from "./Form";
import Table1 from "./Table";

const Profile = () => {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    title: "",
    firstname: "",
    lastname: "",
    dob: "",
    nationality: "",
    citizenID: "",
    passport: "",
    gender: "",
    MobilePhone: "",
    Salary: "",
  });

  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { title: "", firstname: "", lastname: "", dob: "", nationality: "", citizenID: "", passport: "", gender: "", MobilePhone: "", Salary: "", };
      setFormObject(isEmpty);
    }
  };

  return (
    <Fragment>
      <Forms
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      <Table1 tableData={tableData} />
    </Fragment>
  );
}
export default Profile;
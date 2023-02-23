import React from "react";
import { Table } from "react-bootstrap";

const Table1 = ({ tableData }) => {
  return (
    <Table class="table table-striped table-bordered table-sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Date of Birth</th>
          <th>Nationality</th>
          <th>Citizen ID</th>
          <th>Passport No.</th>
          <th>Gender</th>
          <th>Mobile Phone</th>
          <th>Expected Salary</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.title}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.dob}</td>
              <td>{data.nationality}</td>
              <td>{data.citizenID}</td>
              <td>{data.passport}</td>
              <td>{data.gender}</td>
              <td>{data.MobilePhone}</td>
              <td>{data.Salary}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default Table1;

for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
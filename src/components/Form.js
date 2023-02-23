import React from "react";

const Forms = ({ onValChange, formObject, onFormSubmit }) => {
  return (
    <div className="row mb-4">
      <div className="col-2">
        <div className="d-flex align-items-center justify-content-between mb-3">
        <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={onValChange}
            value={formObject.title}
            name="title"
          />
        </div>
      </div>
      <div className="col-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>FirstName</label>
          <input
            type="text"
            className="form-control"
            placeholder="FirstName"
            onChange={onValChange}
            value={formObject.firstname}
            name="firstname"
          />
        </div>
      </div>
      <div className="col-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>LastName</label>
          <input
            type="text"
            className="form-control"
            placeholder="LastName"
            onChange={onValChange}
            value={formObject.lastname}
            name="lastname"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date of Birth"
            onChange={onValChange}
            value={formObject.dob}
            name="dob"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>Nationality</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nationality"
            onChange={onValChange}
            value={formObject.nationality}
            name="nationality"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>Citizen ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Citizen ID"
            onChange={onValChange}
            value={formObject.citizenID}
            name="citizenID"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>Passport No.</label>
          <input
            type="text"
            className="form-control"
            placeholder="Passport"
            onChange={onValChange}
            value={formObject.passport}
            name="passport"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            placeholder="Gender"
            onChange={onValChange}
            value={formObject.gender}
            name="gender"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label>Mobile Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Phone"
            onChange={onValChange}
            value={formObject.MobilePhone}
            name="MobilePhone"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-between position-relative mb-3">
          <label>Expected Salary</label>
          <input
            type="text"
            className="form-control"
            placeholder="Expected Salary"
            onChange={onValChange}
            value={formObject.Salary}
            name="Salary"
          />
          <span className="text-muted position-absolute thb">THB</span>
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center justify-content-start position-relative mb-3">
          <button
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Forms;

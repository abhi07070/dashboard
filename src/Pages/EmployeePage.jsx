import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../Data";
import { toast } from "react-hot-toast";

const EmployeePage = () => {
  const { id } = useParams();
  const [singleEmployeeData, setSingleEmployeeData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const employee = data.find((emp) => emp.id === parseInt(id));
        if (employee) {
          setSingleEmployeeData(employee);
        } else {
          console.log(`Employee with ID ${id} not found.`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = () => {
    const updatedData = data.filter((emp) => emp.id !== parseInt(id));
    setSingleEmployeeData(null);
    data.splice(0, data.length, ...updatedData);
    toast.success("Employee is deleted");
  };

  if (!singleEmployeeData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <div className="singleData">
        <img
          src={singleEmployeeData.imageUrl}
          alt={`${singleEmployeeData.firstName} ${singleEmployeeData.lastName}`}
        />
        <p>
          <strong>Employee ID:</strong> {singleEmployeeData.id}
        </p>
        <p>
          <strong>First Name:</strong> {singleEmployeeData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {singleEmployeeData.lastName}
        </p>
        <p>
          <strong>Age:</strong> {singleEmployeeData.age}
        </p>
        <p>
          <strong>Contact Number:</strong> {singleEmployeeData.contactNumber}
        </p>
        <p>
          <strong>Email:</strong> {singleEmployeeData.email}
        </p>
        <p>
          <strong>Date of Birth:</strong> {singleEmployeeData.dob}
        </p>
        <p>
          <strong>Salary:</strong> {singleEmployeeData.salary} Lac
        </p>
        <div className="buttons">
          <Link className="btn" to={"/dashboard"}>
            Back
          </Link>
          <Link to={"/dashboard"} className="btn" onClick={handleDelete}>
            Delete
          </Link>
          <Link className="btn">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;

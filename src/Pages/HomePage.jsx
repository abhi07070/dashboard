import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data";

const HomePage = () => {
  const [searchId, setSearchId] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(data);

  const handleSearch = (value) => {
    setSearchId(value);

    if (value === "") {
      setFilteredEmployees(data);
    } else {
      const filtered = data.filter((emp) => emp.id === parseInt(value));
      setFilteredEmployees(filtered);
    }
  };

  return (
    <div>
      <h1>Employee Search Page</h1>
      <p>
        Welcome to the Employee Search Page. Use the search below to find
        employee details by their Employee ID.
      </p>
      <div>
        <label>
          Enter Employee ID:
          <input
            type="number"
            value={searchId}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Enter Employee ID"
          />
        </label>
      </div>
      <div>
        <h2>Search Results</h2>
        {filteredEmployees.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Contact Number</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td data-label="First Name">{employee.firstName}</td>
                  <td data-label="Last Name">{employee.lastName}</td>
                  <td data-label="Age">{employee.age}</td>
                  <td data-label="Contact Number">{employee.contactNumber}</td>
                  <td>
                    <Link to={`/employee/${employee.id}`} className="btn">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import axios from "axios";

const BloodHelp = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {

    

    // Replace with your actual API endpoint
    axios.get("http://localhost:8000/api/retrieve_data")
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Form">
      <h1 className="text-center">All India Blood Bank Information</h1>
      <input type="search" placeholder="Search here" />
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>State</th>
            <th>District</th>
            <th>Hospital</th>
            <th>Contact No</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.State}</td>
              <td>{data.District}</td>
              <td>{data.Hospital_name}</td>
              <td>{data.Contact}</td>
              <td>{data.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodHelp;

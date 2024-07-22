import React, { useState } from "react";
import bloodBanks from "./bloodBankData.json"; // Adjust the path as needed

const BloodHelp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Filter the data based on the search query
  const filteredData = searchQuery
    ? bloodBanks.records.filter(data =>
        data.pincode && data.pincode.toString().includes(searchQuery)
      )
    : [];

  // Determine the data to display
  const dataToDisplay = hasSearched ? filteredData : bloodBanks.records.slice(0, 15);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setHasSearched(e.target.value !== "");
  };

  return (
    <div className="Form">
        <div className="flex justify-center gap-20 m-5">
            <h1 className="text-center">All India Blood Bank Information</h1>
            <br />
            <input
            type="search"
            placeholder="Search by Pincode"
            value={searchQuery}
            className="border-2 border-black rounded pl-6"
            onChange={handleSearch}
            />
        </div>
      <hr />
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">Pincode</th>
            <th className="px-4 py-2">Hospital</th>
            <th className="px-4 py-2">Contact No</th>
            <th className="px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.length > 0 ? (
            dataToDisplay.map((data, index) => (
              <tr
                key={data.sr_no}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-gray-300`}
              >
                <td className="border px-4 py-2">{data.sr_no}</td>
                <td className="border px-4 py-2">{data._state}</td>
                <td className="border px-4 py-2">{data.pincode}</td>
                <td className="border px-4 py-2">{data._blood_bank_name}</td>
                <td className="border px-4 py-2">{data._contact_no}</td>
                <td className="border px-4 py-2">{data._address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">No Record Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BloodHelp;

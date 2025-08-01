"use client";
import React, { useEffect, useState } from "react";

const dummyData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Campaign ${i + 1}`,
  impressions: Math.floor(Math.random() * 10000),
  clicks: Math.floor(Math.random() * 1000),
  date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
}));

const DataTable = () => {
  const [data, setData] = useState(dummyData);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Sort + Filter Logic
  const sortedFilteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

  const totalPages = Math.ceil(sortedFilteredData.length / itemsPerPage);
  const paginatedData = sortedFilteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Campaign Data Table
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 border border-gray-500 rounded w-full max-w-xs text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 border border-gray-200  rounded-xl shadow">
            <thead className="bg-purple-100 text-purple-700">
              <tr>
                {["id", "name", "impressions", "clicks", "date"].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-2 text-left cursor-pointer"
                    onClick={() => handleSort(col)}
                  >
                    {col.charAt(0).toUpperCase() + col.slice(1)}{" "}
                    {sortBy === col ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-100 border-gray-700 text-gray-800">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.impressions}</td>
                  <td className="px-4 py-2">{item.clicks}</td>
                  <td className="px-4 py-2">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-purple-300 cursor-pointer text-black px-4 py-2 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="bg-purple-300 cursor-pointer text-black px-4 py-2 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataTable;

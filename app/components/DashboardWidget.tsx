"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { FaFileCsv, FaFilePdf } from "react-icons/fa";
import { saveAs } from "file-saver";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const generateDummyData = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Campaign ${i + 1}`,
    impressions: Math.floor(Math.random() * 10000),
    clicks: Math.floor(Math.random() * 1000),
    date: format(new Date(Date.now() - i * 86400000), "yyyy-MM-dd"),
  }));
};

const DashboardWidget = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(generateDummyData());
      setLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setData(generateDummyData());
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    return (
      (!startDate || itemDate >= new Date(startDate)) &&
      (!endDate || itemDate <= new Date(endDate))
    );
  });

  const handleExportCSV = () => {
    const header = "ID,Name,Impressions,Clicks,Date\n";
    const rows = filteredData
      .map((d) => `${d.id},${d.name},${d.impressions},${d.clicks},${d.date}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "dashboard.csv");
  };

  const handleExportPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write("<html><head><title>Dashboard PDF</title></head><body>");
    printWindow.document.write("<h2>Campaign Data</h2>");
    printWindow.document.write("<table border='1' cellpadding='4'><tr><th>ID</th><th>Name</th><th>Impressions</th><th>Clicks</th><th>Date</th></tr>");
    filteredData.forEach((item) => {
      printWindow?.document.write(`<tr><td>${item.id}</td><td>${item.name}</td><td>${item.impressions}</td><td>${item.clicks}</td><td>${item.date}</td></tr>`);
    });
    printWindow.document.write("</table></body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Campaign Dashboard
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-400 text-gray-600 px-4 py-2 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-400 text-gray-600 px-4 py-2 rounded"
        />
        <button
          onClick={handleExportCSV}
          className="flex items-center cursor-pointer gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <FaFileCsv /> Export CSV
        </button>
        <button
          onClick={handleExportPDF}
          className="flex items-center cursor-pointer gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          <FaFilePdf /> Export PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-purple-100 text-purple-700">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Impressions</th>
              <th className="p-3 text-left">Clicks</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              [...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td colSpan={5} className="p-3">
                    <Skeleton height={20} />
                  </td>
                </tr>
              ))
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50 text-gray-700">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.impressions}</td>
                  <td className="p-3">{item.clicks}</td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardWidget;

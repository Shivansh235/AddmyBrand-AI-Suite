"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", growth: 20 },
  { month: "Feb", growth: 35 },
  { month: "Mar", growth: 50 },
  { month: "Apr", growth: 65 },
  { month: "May", growth: 80 },
];

const barData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 800 },
  { month: "Mar", users: 1000 },
  { month: "Apr", users: 1500 },
  { month: "May", users: 1800 },
];

const pieData = [
  { name: "Organic", value: 45 },
  { name: "Ads", value: 30 },
  { name: "Referral", value: 25 },
];

const COLORS = ["#a78bfa", "#c084fc", "#ddd6fe"];

const ChartsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Insights & Trends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* Line Chart */}
        <div className="bg-purple-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2 text-purple-700">Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="growth" stroke="#8b5cf6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-purple-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2 text-purple-700">Monthly Users</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#a78bfa" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-purple-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2 text-purple-700">Lead Sources</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#c084fc"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;

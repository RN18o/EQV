import React from "react";

export default function Header({ timeRange, setTimeRange }) {
  return (
    <header className="bg-[#3d5e80] text-white p-3 flex justify-between items-center">
      <h1 className="text-lg sm:text-xl font-bold">Global Earthquakes</h1>

      {/* Time Filter Dropdown */}
      <select
        value={timeRange}
        onChange={(e) => setTimeRange(e.target.value)}
        className="text-white font-bold rounded p-1 text-sm"
      >
        <option className="text-black" value="hour">Past Hour</option>
        <option className="text-black" value="day">Past Day</option>
        <option className="text-black" value="week">Past 7 Days</option>
        <option className="text-black" value="month">Past 30 Days</option>
      </select>
    </header>
  );
}

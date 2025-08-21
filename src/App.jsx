
import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";
import "./index.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const data = [
    { id: 1, name: "Swapnil", age: 28, email: "swapnil@gmail.com" },
    { id: 2, name: "Nilesh", age: 35, email: "nilesh@gmail.com" },
    { id: 3, name: "Rohit", age: 23, email: "rohit@gmail.com" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 px-4 py-2 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 dark:text-black"
        >
        {darkMode ? "Light" : "Dark"} Mode
        </button>

        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-8 w-full max-w-5xl grid md:grid-cols-2 gap-8">
      
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              React UI
            </h1>

            <InputField
              label="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="We'll never share your email."
            />

            {/* Password Field */}
            <InputField
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
            />

            {/* Search Field */}
            <InputField
              label="Search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              clearable
            />

            {/* Invalid Example */}
            <InputField
              label="Invalid"
              placeholder=""
              invalid
              errorMessage="This field is required"
            />
          </div>

          {/* Right Side - Data Table */}
          <div className="mt-[118px]">
            <DataTable data={data} columns={["name", "age", "email"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

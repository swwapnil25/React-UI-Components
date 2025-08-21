// src/App.jsx
import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";
import "./index.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, name: "Alice", age: 28, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 35, email: "bob@example.com" },
    { id: 3, name: "Carol", age: 23, email: "carol@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-8 w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Left Side - Form Fields */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Component Demo
          </h1>

          {/* Email Field */}
          <InputField
            label="Email"
            placeholder="you@example.com"
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
            placeholder="Invalid"
            invalid
            errorMessage="This field is required"
          />
        </div>

        {/* Right Side - Data Table */}
        <div>
          <DataTable 
            data={data} 
            columns={["name", "age", "email"]} 
          />
        </div>
      </div>
    </div>
  );
}

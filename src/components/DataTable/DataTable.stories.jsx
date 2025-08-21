import DataTable from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

const sampleData = [
  { id: 1, name: "Swapnil", age: 28, email: "swapnil@gmail.com" },
  { id: 2, name: "Nilesh", age: 35, email: "nilesh@gmail.com" },
  { id: 3, name: "Rohit", age: 23, email: "rohit@gmail.com" },
];
const columns = ["name", "age", "email"];

export const Basic = () => <DataTable data={sampleData} columns={columns} />;

export const Loading = () => <DataTable data={[]} columns={columns} loading />;

export const Empty = () => <DataTable data={[]} columns={columns} />;

export const DarkMode = () => (
  <div className="dark bg-gray-900 p-6 min-h-screen">
    <DataTable data={sampleData} columns={columns} />
  </div>
);

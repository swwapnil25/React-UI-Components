import DataTable from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

const sampleData = [
  { id: 1, name: "Alice", age: 28, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 35, email: "bob@example.com" },
  { id: 3, name: "Carol", age: 23, email: "carol@example.com" },
];
const columns = ["name", "age", "email"];

export const Basic = () => <DataTable data={sampleData} columns={columns} />;
export const Loading = () => <DataTable data={[]} columns={columns} loading />;
export const Empty = () => <DataTable data={[]} columns={columns} />;

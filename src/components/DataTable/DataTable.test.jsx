import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataTable from "./DataTable";

const columns = ["name", "age", "email"];
const sampleData = [{ id: 1, name: "John", age: 30, email: "john@example.com" }];

describe("DataTable", () => {
  it("renders data", () => {
    render(<DataTable data={sampleData} columns={columns} />);
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("shows loading row", () => {
    render(<DataTable data={[]} columns={columns} loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows empty message when no data", () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("sorts when header clicked", () => {
    const multiData = [
      { id: 1, name: "John", age: 30, email: "john@example.com" },
      { id: 2, name: "Alice", age: 25, email: "alice@example.com" },
    ];
    render(<DataTable data={multiData} columns={columns} />);
    fireEvent.click(screen.getByText("Age"));
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Alice");
  });

  it("calls onRowSelect when checkbox clicked", () => {
    const fn = vi.fn();
    render(<DataTable data={sampleData} columns={columns} onRowSelect={fn} />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]);
    expect(fn).toHaveBeenCalledWith(sampleData[0]);
  });
});

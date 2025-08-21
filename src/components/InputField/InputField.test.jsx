// src/components/InputField/InputField.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputField from "./InputField";

describe("InputField", () => {
  it("renders label and updates value", () => {
    const Wrapper = () => {
      const [val, setVal] = React.useState("");
      return <InputField label="Name" value={val} onChange={(e) => setVal(e.target.value)} />;
    };
    render(<Wrapper />);
    const input = screen.getByLabelText("Name");
    fireEvent.change(input, { target: { value: "John" } });
    expect(input.value).toBe("John");
  });

  it("shows error message", () => {
    render(<InputField label="Email" value="" errorMessage="Email is required" />);
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("clears when clear clicked", () => {
    const Wrapper = () => {
      const [val, setVal] = React.useState("Hello");
      return (
        <InputField label="Msg" value={val} clearable onChange={(e) => setVal(e.target.value)} />
      );
    };
    render(<Wrapper />);
    const clearBtn = screen.getByRole("button", { name: /clear input/i });
    fireEvent.click(clearBtn);
    expect(screen.getByLabelText("Msg").value).toBe("");
  });

  it("toggles password visibility", () => {
    const Wrapper = () => {
      const [val, setVal] = React.useState("secret");
      return (
        <InputField
          label="Password"
          type="password"
          value={val}
          showPasswordToggle
          onChange={(e) => setVal(e.target.value)}
        />
      );
    };
    render(<Wrapper />);
    const toggleBtn = screen.getByRole("button", { name: /show password/i });
    fireEvent.click(toggleBtn);
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");
  });
});

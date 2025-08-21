// src/components/InputField/InputField.stories.jsx
import { useState } from "react";
import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    label: "Email",
    placeholder: "you@example.com",
    variant: "outlined",
    size: "md",
    helperText: "We will never share your email.",
  },
  argTypes: {
    variant: { control: "radio", options: ["filled", "outlined", "ghost"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
};

export const Basic = (args) => {
  const [val, setVal] = useState("");
  return <InputField {...args} value={val} onChange={(e) => setVal(e.target.value)} />;
};

export const Invalid = () => (
  <InputField label="Username" placeholder="johndoe" invalid errorMessage="Username is required" />
);

export const Password = () => {
  const [val, setVal] = useState("");
  return (
    <InputField
      label="Password"
      type="password"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      showPasswordToggle
      helperText="Use 8+ characters"
    />
  );
};

export const Loading = () => <InputField label="Search" placeholder="Loading..." loading disabled />;

export const Clearable = () => {
  const [val, setVal] = useState("Hello");
  return (
    <InputField
      label="Message"
      placeholder="Type something"
      value={val}
      clearable
      onChange={(e) => setVal(e.target.value)}
    />
  );
};

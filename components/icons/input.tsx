import React from "react";
import { Input as NextInput } from "@nextui-org/input";
import Send from "./send";

const Input = () => {
  return (
    <NextInput
      variant="bordered"
      placeholder="Enter your email"
      endContent={
        <button type="button" aria-label="toggle password visibility">
          <Send />
        </button>
      }
      className="max-w-xs"
    />
  );
};

export default Input;

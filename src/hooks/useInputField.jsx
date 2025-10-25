import React from "react";
import { useState } from "react";

const useInputField = (defaultValue) => {
  const [filedValue, setFieldValue] = useState(defaultValue);
  const handleOnChangeValue = (e) => {
    setFieldValue(e.target.value);
  };
  return [filedValue, handleOnChangeValue];
};

export default useInputField;

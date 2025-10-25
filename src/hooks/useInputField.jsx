import React, { useState } from "react";

const useInputField = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleOnChange];
};

export default useInputField;

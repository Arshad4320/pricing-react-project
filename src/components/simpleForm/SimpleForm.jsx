import React, { useState } from "react";

const SimpleForm = () => {
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const [sum, setSum] = useState(0);
  //   const handleSubmit = (e) => {
  //     const name= e.target.name.value;
  //     console.log(name);
  //   };
  //   const handleSubmit = (formData) => {
  //     const firstName = formData.get("firstName");
  //     const lastName = formData.get("lastName");
  //     console.log(firstName, lastName);
  //   };
  const handleSubmit = (formData) => {
    const num1 = formData.get("num1");
    const num2 = formData.get("num2");
    let totalNum = Number(num1) + Number(num2);
    setSum(totalNum);
  };
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 5) {
      setError("password must be 6 cherecters or more long");
    } else {
      setError("");
    }
  };
  return (
    <div className="flex justify-center items-center">
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border "
          name="name"
          placeholder="type name"
        />
        <br />
        <input type="submit" value="Submit" />
      </form> */}
      <form action={handleSubmit}>
        <p>{sum}</p>
        <input
          type="number"
          className="border mr-2"
          placeholder="email"
          name="num1"
        />
        <input
          type="number"
          placeholder="password"
          name="num2"
          className="border"
        />
        <span className="text-red-600"> {error}</span>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;

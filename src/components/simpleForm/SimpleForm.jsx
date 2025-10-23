import React from "react";

const SimpleForm = () => {
  //   const handleSubmit = (e) => {
  //     const name= e.target.name.value;
  //     console.log(name);
  //   };
  //   const handleSubmit = (formData) => {
  //     const firstName = formData.get("firstName");
  //     const lastName = formData.get("lastName");
  //     console.log(firstName, lastName);
  //   };
  const handleSubmit = (e) => {
    // console.log(e);
  };
  const handleOnChange = (e) => {
    console.log(e.target.value);
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
        <input
          type="text"
          className="border mr-2"
          placeholder="first name"
          name="name"
        />
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="last name"
          name="email"
          className="border"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;

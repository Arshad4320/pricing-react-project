import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, setName] = useInputField("");
  const [email, setEmail] = useInputField("");
  const [password, setPassword] = useInputField("");
  console.log(name, email, password);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };
  return (
    <div>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          className="border "
          defaultValue={name}
          onChange={setName}
          type="text"
        />
        <input
          className="border "
          defaultValue={email}
          onChange={setEmail}
          type="text"
        />
        <input
          className="border "
          defaultValue={password}
          onChange={setPassword}
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default HookForm;

import { useState } from "react";

const Input = ({ onInput }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onInput(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input onChange={inputHandler} type="text" value={inputValue} />
      <button type="submit">Find Character</button>
    </form>
  );
};

export default Input;

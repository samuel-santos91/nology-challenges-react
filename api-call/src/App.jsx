import { useState } from "react";

import "./App.css";
import Input from "./components/Input/Input";
import Display from "./components/Display/Display";

function App() {
  const [data, setData] = useState("");

  const dataHandler = (value) => {
    setData(value);
  };

  return (
    <>
      <div>
        <Input onInput={dataHandler} />
        {data && <Display id={data}/>}
      </div>
    </>
  );
}

export default App;

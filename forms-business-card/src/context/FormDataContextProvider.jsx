import { createContext, useState } from "react";

export const FormDataContext = createContext(null);

const FormDataContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [logoPath, setLogoPath] = useState("");

  return (
    <FormDataContext.Provider value={{ data, setData, logoPath, setLogoPath }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContextProvider;

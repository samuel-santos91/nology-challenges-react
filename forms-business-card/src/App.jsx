import FormDataContextProvider from "./context/FormDataContextProvider";

import FormSection from "./components/FormSection/FormSection";
import BusinessCard from "./components/BusinessCard/BusinessCard";

import "./App.css";

function App() {
  return (
    <FormDataContextProvider>
      <FormSection />
      <BusinessCard />
    </FormDataContextProvider>
  );
}

export default App;

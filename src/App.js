import React from "react";
import Form from "./components/Form/Main";
import { fieldsObjOne, fieldsObjTwo } from "./Data";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Form fields={fieldsObjOne} />
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "./Component/Layout/Layout";
import Button from "./Component/Inputs/Buttons/Buttons";

function App() {
  return (
    <div>
      <Layout property="Box-secondary" />
      <Layout property="Box-primary" />
      <Button color="primaryButton" />
      <Button color="secondaryButton" />
    </div>
  );
}

export default App;

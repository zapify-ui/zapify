/* eslint-disable no-unused-vars */
import React from "react";
import Box from "./Component/Layout/Box/Box";
import Button from "./Component/Inputs/Buttons/Buttons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Box color="boxPrimary" p={7} m={3} />
        <Box color="boxSecondary" p={5} m={4} />
        <Box color="boxTertiary" p={3} m={5} />
        {/* <Box property="Box-secondary" /> */}
        {/* <Layout property="Box-secondary" />
      <Layout property="Box-primary" /> */}
        <Button color="primaryButton" />
        <Button color="secondaryButton" />
        <Button color="tertiaryButton" />
      </div>
    </div>
  );
}

export default App;

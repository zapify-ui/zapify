/* eslint-disable no-unused-vars */
import React from "react";
import Box from './Component/Layout/Box/Box';
import Button from "./Component/Inputs/Buttons/Buttons";
import './App.css';
import Container from "./Component/Layout/Container/Container";

function App() {
  return (
    <div className="App">
      <div>
      <Box color="boxPrimary" p={2} m={2}/>
      <Box color="boxSecondary" p={2} m={2}/>
      <Box color="boxTertiary" p={2} m={2}/>
      <Button color="primaryButton" />
      <Button color="secondaryButton" />
      <Container type="fluid" maxWidth="sm"/>
      <Container type="fluid" maxWidth="md"/>
      <Container type="fluid" maxWidth="xl"/>
      <Container type="fixed"/>
      </div>
    </div>
  );
}

export default App;

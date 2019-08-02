/* eslint-disable no-unused-vars */
import React from "react";
import Box from "./Components/Layout/Box/Box";
import Button from "./Components/Inputs/Buttons/Buttons";
import "./App.css";
import Container from "./Components/Layout/Container/Container";
import "./App.css";
import Typography from "./Components/Data Display/Typography/Typography";

function App() {
  return (
    <div className="App">
      <div>
        <Typography variant="h1">Zapify</Typography>

        <Box color="boxPrimary" p={2} m={2.5} />
        <Box color="boxSecondary" p={2} m={2.5} />
        <Box color="boxTertiary" p={2} m={2.5} />
        <Box color="darkPrimary" p={2} m={2.5} />
        <Box color="darkSecondary" p={2} m={2.5} />
        <Box color="darkTertiary" p={2} m={2.5} />
        <Box color="disabled" p={2} m={2.5} />
        <Button color="primaryButton" />
        <Button color="secondaryButton" />

        <Container type="fluid" maxWidth="sm" />
        <Container type="fluid" maxWidth="md" />
        <Container type="fluid" maxWidth="xl" />
        <Container type="fixed" />
      </div>
    </div>
  );
}

export default App;

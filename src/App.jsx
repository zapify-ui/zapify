/* eslint-disable no-unused-vars */
import React from "react";
import Box from "./Components/Layout/Box/Box";
import Button from "./Components/Inputs/Buttons/Buttons";
import "./App.scss";
import Container from "./Components/Layout/Container/Container";
import Typography from "./Components/Data Display/Typography/Typography";
import TextField from "./Components/Inputs/TextField/TextField";
import Grid from "./Components/Layout/Grid/Grid";

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
        <Grid />
        <Button color="primaryButton">Button</Button>
        <TextField>Input</TextField>
        <Container type="fluid" maxWidth="sm" />
        <Container type="fluid" maxWidth="md" />
        <Container type="fluid" maxWidth="xl" />
        <Container type="fixed" />
        
      </div>
    </div>
  );
}

export default App;

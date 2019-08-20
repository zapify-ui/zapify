import React from "react";

export default function Colors() {
  // eslint-disable-next-line no-plusplus
  const _colors = [
    "#967adc",
    "#967adc",
    "#4a89dc",
    "#656d78",
    "#8cc152",
    "#f6bb42",
    "#d770ad",
    "#967adc",
    "#da4453",
    "#ffce54",
    "#ccd1d9",
    "#434a54"
  ];
  const _names = [
    "primary",
    "lavendar",
    "blue",
    "gray",
    "green",
    "orange",
    "pink",
    "purple",
    "red",
    "yellow",
    "white",
    "black"
  ];
  const items = [];
  for (let i = 0; i < 10; i += 1) {
    items.push(
      <center>
        <div
          style={{
            backgroundColor: _colors[i],
            maxWidth: "100%",
            color: "white",
            borderRadius: 10,
            height: "70px",
            textAlign: "center",
            padding: "1em 1em 1em 1em",
            margin: "1em 1em 1em 1em",
            borderStyle: "solid",
            borderColor: "white"
          }}
        >
          {_names[i].toUpperCase()}
        </div>
      </center>
    );
  }
  return items;
}

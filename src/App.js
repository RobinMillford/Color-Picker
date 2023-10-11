import React from "react";
import ColorPicker from "./ColorPicker";

const App = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "teal",
    "brown",
    "gray",
    "black",
    "white",
  ];
  

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
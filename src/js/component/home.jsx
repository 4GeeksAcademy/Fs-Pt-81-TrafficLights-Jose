import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  const [isVisible, setIsVisible] = useState(false); //verdadero se muestra y false se esconde
  const toggleVisibility = () => {
    //alternar entre true o false
    setIsVisible(!isVisible);
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-dark width15" style={{ height: "20vh" }}></div>
      <div className="text-center width80 rounded bg-dark d-flex flex-column justify-content-center align-items-center">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
        {isVisible && (
          <div
            className={`light purple ${color === "purple" ? "glow" : ""}`}
            onClick={() => setColor("purple")}
          ></div>
        )}
      </div>
      <button onClick={toggleVisibility} className="btn btn-primary my-3">
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Home;

import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";

export const Acasa = () => {
  const { monkeyName } = useContext(AppContext);
  const [acasaType, setacasaType] = useState("sufragerie");
  const [arata, setArata] = useState(true);
  useEffect(() => {
    console.log(acasaType);
  }, [acasaType]);

  const color1 = {
    backgroundColor: "pink",
    padding: "10px",
    fontFamily: "Arial",
  };

  const color2 = {
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  const color3 = {
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <div style={color1}>
        <button onClick={() => setacasaType("sufragerie")}>SUFRAGERIE</button>
      </div>
      <div style={color2}>
        <button onClick={() => setacasaType("baie")}>BAIE</button>
      </div>
      <div style={color3}>
        <button onClick={() => setacasaType("camera copiilor")}>
          CAMERA COPIILOR
        </button>
      </div>
      <h1>CASA MEA</h1>
      <button onClick={() => setArata((prev) => !prev)}>ARATA</button>
      {arata ? <h1>EXISTA</h1> : <h1>NU EXISTA</h1>};{arata && <h1>EXISTA</h1>};
      <p1>{monkeyName}</p1>
    </>
  );
};

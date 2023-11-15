import { useState } from "react";
import { Oposite } from "./components/Oposite";
import "./App.css";

// export const AboutState = () => {
//   const [countState, setCountState] = useState(0);
//   let count = 0;

//   const add = () => {
//     count++;
//     console.log(count);
//   };

//   const addState = () => {
//     setCountState(countState + 1);
//   };

//   return (
//     <>
//       <div>
//         {count}
//         <br />
//         <button onClick={add}>ADD</button>
//       </div>
//       <div>
//         {countState}
//         <br />
//         <button onClick={() => setCountState(countState + 1)}>
//           ADD WITH STATE
//         </button>
//       </div>
//     </>
//   );
// };

export const AboutState = () => {
  const [visualiseText, setvisualiseText] = useState();

  const stylediv = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <Oposite setvisualise={setvisualiseText} />
      {visualiseText ? (
        <div style={stylediv}>Catel</div>
      ) : (
        <div className="stil">Pisica</div>
      )}
    </>
  );
};

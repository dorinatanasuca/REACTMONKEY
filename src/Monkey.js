import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./App";

export const Monkey = (props) => {
  const { setMonkeyName, monkeyName } = useContext(AppContext);
  const param = useParams();
  const navigate = useNavigate();
  // console.log(param);
  // console.log(props.monkeysArr);
  const [monkeyFound, setMonkeyFound] = useState("Rush");

  useEffect(() => {
    props.monkeysArr.map((m) => {
      if (m.id === +param.id) {
        // parseInt, Number - transforma inntr-un numar din string
        setMonkeyFound(m);
        setMonkeyName(m.name);

        console.log("Console name monkey: " + monkeyName);
      }
      return console.log("unmount");
    });
  }, []); // parantezele patrate simple se intampla cand componenta este creata - face mounting
  // [paramentru] - mount+update, doar daca paramentrul isi face update

  //return din useEffect- unmounting

  return (
    <div>
      <p>{monkeyFound.name}</p>
      <p>
        is {monkeyFound.age} years old and is {!monkeyFound.friendly && "not "}
        friendly
      </p>
      <button onClick={() => navigate("/monkeys")}>GO BACK</button>
    </div>
  );
};

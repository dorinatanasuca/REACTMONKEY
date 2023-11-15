import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Monkey = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  // console.log(param);
  // console.log(props.monkeysArr);
  const [monkeyFound, setMonkeyFound] = useState("");

  useEffect(() => {
    props.monkeysArr.map((m) => {
      if (m.id === +param.id) {
        // parseInt, Number - transforma inntr-un numar din string
        setMonkeyFound(m);
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

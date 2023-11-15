import { useState } from "react";
import { Button } from "./components/pages/Button";

export const AboutState2 = (props) => {
  const [seeText, setseeText] = useState(true);
  console.log(props.array);

  const color1 = {
    color: "red",
    backgroundColor: "pink",
  };

  const color2 = {
    color: "blue",
    backgroundColor: "DodgerBlue",
  };

  return (
    <>
      <Button setseeText={setseeText} />
      <div style={seeText ? color1 : color2}>I CAN CHANGE MY COLOR</div>
    </>
  );
};

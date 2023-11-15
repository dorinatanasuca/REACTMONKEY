import { ConsoleChild } from "./ConsoleChild";

export const Console = (props) => {
  return (
    <>
      <h1>Console Component</h1>
      <ConsoleChild array2={props.array} />
    </>
  );
};

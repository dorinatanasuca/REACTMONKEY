export const Button = (props) => {
  const change = () => {
    props.setseeText((prev) => !prev);
  };
  return <button onClick={change}>CLICK HERE</button>;
};

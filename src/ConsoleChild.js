export const ConsoleChild = (props) => {
  const Dogs = props.array2;

  return (
    <>
      {Dogs.maps((dog) => {
        return (
          <div>
            <h3>{dog.name}</h3>
            <p>
              Has {dog.age} old and is{" "}
              {dog.friendly ? "friendl" : "not friendly"}
            </p>
            <p>
              Has {dog.age} old and is {!dog.friendly && "not"} friendly
            </p>
          </div>
        );
      })}
    </>
  );
};

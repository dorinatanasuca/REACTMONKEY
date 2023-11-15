export const Oposite = (prop) => {
  const visualise = () => {
    prop.setvisualise((prev) => !prev);
  };

  return (
    <>
      <button onClick={visualise}>CATEL SAU PISICA</button>
    </>
  );
};

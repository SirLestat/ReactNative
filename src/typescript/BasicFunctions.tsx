export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`;
  };
  return (
    <>
      <h3>Basic Functions</h3>
      <span>Resultado: {addTwoNumbers(2, 8)} </span>
    </>
  );
};

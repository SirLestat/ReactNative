export const BasicTypes = () => {
  const name: string = 'Alejandro';
  const age: number = 38;
  const isActive: boolean = true;
  const powers: string[] = ['React', 'Typescript', 'React Native'];

  return (
    <>
      <div>BasicTypes</div>
      {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
      <p>{powers.join(', ')}</p>
    </>
  );
};

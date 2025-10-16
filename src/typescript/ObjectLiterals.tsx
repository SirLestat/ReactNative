interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: 120;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 38,
    firstName: 'Alejandro',
    lastName: 'santiago',
    address: {
      country: 'Mexico',
      houseNo: 120,
    },
  };
  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

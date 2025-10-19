import { UserRow } from './UserRow';

export const UsersPage = () => {
  const buttonClass = 'p-2 bg-purple-500 text-white rounded-md';
  return (
    <>
      <h3>Usuarios</h3>

      <table className='w-[500px] bg-black rounded-xl text-white'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>

      <div className='flex justify-between w-[500px] mt-2'>
        <button className={buttonClass}>Anterior</button>
        <button className={buttonClass}>Siguiente</button>
      </div>
    </>
  );
};

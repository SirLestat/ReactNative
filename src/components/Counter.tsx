import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { count, handleAdd } = useCounter();

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>

      <div>
        <button
          onClick={() => {
            handleAdd('resta');
          }}
          className='bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-800'
        >
          -1
        </button>
        <button
          onClick={() => {
            handleAdd('suma');
          }}
          className='bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-800'
        >
          +1
        </button>
      </div>
    </>
  );
};

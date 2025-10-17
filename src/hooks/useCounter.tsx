import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState<number>(10);

  const handleAdd = (operator: string) => {
    operator === 'suma' ? setCount(count + 1) : setCount(count - 1);
  };
  return {
    //properties
    count,

    //Actions
    handleAdd,
  };
};

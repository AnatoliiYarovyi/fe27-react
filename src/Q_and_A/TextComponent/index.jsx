import { useState } from 'react';

const TextComponent = props => {
  const [title, setTitle] = useState('');
  const changeHandler = event => {
    setTitle(event.target.value);
  };

  return (
    <div style={{ marginTop: '200px' }}>
      <h2>{title}</h2>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default TextComponent;

const add = value => {
  let result = value;

  return function recursiveAdd(recursiveValue) {
    if (!recursiveValue) return result;

    result = result + recursiveValue;

    return recursiveAdd;
  };
};

const isEqual = (testedValue, expectedValue) => {
  if (testedValue !== expectedValue) {
    throw new Error('Значения не равны');
  }
  console.log('All right');
};

isEqual(add(3)(4)(1)(2)(), 10);
isEqual(add(3)(), 3);
isEqual(add(3)(4)(), 7);

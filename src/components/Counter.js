import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/valueSlice';

const Counter = () => {
  const numberOfClicks = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
        type="button"
      >
        +
      </button>
      <p>Number: {numberOfClicks}</p>
      <button
        onClick={() => {
          dispatch(decrement(1));
        }}
        type="button"
      >
        -
      </button>
    </>
  );
};

export default Counter;

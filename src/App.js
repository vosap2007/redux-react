import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './redux/valueSlice';
import './App.css';

function App() {
  const numberOfClicks = useSelector((state) => state.clicks.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(update());
        }}
        type="button"
      >
        Number of clicks: {numberOfClicks}
      </button>
    </>
  );
}

export default App;

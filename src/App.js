import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, add, del } from './redux/valueSlice';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [text, setText] = useState('');
  const numberOfClicks = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const dataList = useSelector((state) => state.items);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add(text));
    //  event.currentTarget.reset();
    setText('');
  };

  console.log(' text.length > 1', text.length);

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
        type="button"
      >
        increment +1
      </button>
      <p>Number of clicks: {numberOfClicks}</p>
      <button
        onClick={() => {
          dispatch(decrement(1));
        }}
        type="button"
      >
        decrement - 1
      </button>

      <Counter />

      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>

      {dataList &&
        dataList.map((name, idx) => {
          return (
            <div key={idx}>
              <p>{name}</p>
              <button
                onClick={() => {
                  dispatch(del(name));
                }}
              >
                del {name}
              </button>
            </div>
          );
        })}
    </>
  );
}

export default App;

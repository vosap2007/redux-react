import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, add, del } from 'redux/valueSlice';
import Counter from 'components/Counter';
import * as pokemonsOperations from 'redux/pokemons/pokemonsOperations';
import 'App.css';
import { getPokemons } from 'redux/pokemons/pokemonsSelectors';
function App() {
  const [text, setText] = useState('');
  const numberOfClicks = useSelector((state) => state.value);
  const pokemons = useSelector((state) => state.pokemons.entities.results);
  const dispatch = useDispatch();

  const dataList = useSelector((state) => state.items);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add(text));
    setText('');
  };

  useEffect(() => {
    dispatch(pokemonsOperations.fetchPokemons());
  }, [dispatch]);

  console.log('pokemons', pokemons);

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

      <ul>
        {pokemons &&
          pokemons.map((pokemon, idx) => {
            return <li key={idx}>{pokemon.name}</li>;
          })}
      </ul>
    </>
  );
}

export default App;

import './App.css';
import './components/Title';

import {useSelector, useDispatch} from 'react-redux';
import {shuffleAgain, showTurns} from './features/cardsSlice';

import Title from './components/Title';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const cards = useSelector((state) => state.cards.cards);
  const turns = useSelector(showTurns);
  const dispatch = useDispatch();

  const allMatched = () => {
    return cards.every((card) => card.matched);
  };

  return (
    <>
      <Title title="Flipping game" />
      <p className="card-turns">
        Your turns: <span>{turns}</span>
      </p>
      <div className="App">
        <section className="game">
          {!cards.length ? (
            <h1 className="game-title">Карточек нет.</h1>
          ) : allMatched() ? (
            <>
              <h1 className="game-title">Карточки совпали !</h1>
              <h2 className="game-title">Вы сделали {turns} ходов !</h2>
            </>
          ) : (
            cards.map((card) => {
              return <Card key={card.id} id={card.id} url={card.url} matched={card.matched} flipped={card.flipped} />;
            })
          )}
        </section>
        <Button text="Start game" shuffleCards={() => dispatch(shuffleAgain())} />
      </div>
    </>
  );
}

export default App;

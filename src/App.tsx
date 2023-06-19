import { useState } from 'react';
import './App.css';
import { hsk1 } from './wordlists/hsk1.js';
import { hsk2 } from './wordlists/hsk2.js';
import { hsk3 } from './wordlists/hsk3.js';
import { hsk4 } from './wordlists/hsk4.js';
import { hsk5 } from './wordlists/hsk5.js';
import { hsk6 } from './wordlists/hsk6.js';

function Card({ defaultValue , definition , pinyin} : { defaultValue : string, definition :string , pinyin: string}) {
  const [value, setValue] = useState(defaultValue);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick() {
    setShowAnswer(!showAnswer);
    showAnswer ? setValue(defaultValue) : setValue(definition + " (" + pinyin + ")");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function App() {
  let cards: Array<JSX.Element> = [];
  let wordlists = [ hsk1, hsk2, hsk3, hsk4, hsk5, hsk6 ];
  wordlists.forEach(y =>
    y.forEach(x =>
        cards.push(<Card defaultValue={x.simplified} definition={x.definition} pinyin={x.pinyinAccent}/>)
    )
  )
  return (
    <div>
      {cards}
    </div>
  )
}

export default App;

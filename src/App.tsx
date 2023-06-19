import { useState } from 'react';
import './App.css';
import { hsk1 } from './wordlists/hsk1.js';
import { hsk2 } from './wordlists/hsk2.js';
import { hsk3 } from './wordlists/hsk3.js';
import { hsk4 } from './wordlists/hsk4.js';
import { hsk5 } from './wordlists/hsk5.js';
import { hsk6 } from './wordlists/hsk6.js';

/*
type Card = {
  simplified: string;
  traditional: string;
  pinyin: string;
  translation: string;
}

type Cards = {
  cards: Card[]
}

let card = {
  simplified: string;
  traditional: string;
  pinyin: string;
  translation: string;
}
*/

function Card({ defaultValue , definition } : { defaultValue : string, definition :string }) {
  const [value, setValue] = useState(defaultValue);
  const [showAnswer, setShowAnswer] = useState(true);

  function handleClick() {
    setShowAnswer(!showAnswer);
    showAnswer ? setValue(defaultValue) : setValue(definition);
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
  hsk1.forEach(x =>
      cards.push(<Card defaultValue={x.simplified} definition={x.definition}/>)
  )
  hsk2.forEach(x =>
      cards.push(<Card defaultValue={x.simplified} definition={x.definition}/>)
  )
  hsk3.forEach(x =>
      cards.push(<Card defaultValue={x.simplified} definition={x.definition}/>)
  )
  hsk4.forEach(x =>
      cards.push(<Card defaultValue={x.simplified} definition={x.definition}/>)
  )
  hsk5.forEach(x =>
      cards.push(<Card defaultValue={x.simplified} definition={x.definition}/>)
  )
  hsk6.forEach(x =>
      cards.push(<Card defaultValue={x.simplified} definition={x.definition}/>)
  )

  return (
    <div>
      {cards}
    </div>
  )
}

export default App;

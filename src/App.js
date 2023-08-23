import './App.css';
// import { nanoid } from 'nanoid'
// import uuid from 'react-uuid';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  let [result, setResult] = useState('');
  let str = text;
  let transl = [];
  transl['А'] = 'A'; transl['а'] = 'a';
  transl['Б'] = 'B'; transl['б'] = 'b';
  transl['В'] = 'V'; transl['в'] = 'v';
  transl['Г'] = 'G'; transl['г'] = 'g';
  transl['Д'] = 'D'; transl['д'] = 'd';
  transl['Е'] = 'E'; transl['е'] = 'e';
  transl['Ё'] = 'Yo'; transl['ё'] = 'yo';
  transl['Ж'] = 'Zh'; transl['ж'] = 'zh';
  transl['З'] = 'Z'; transl['з'] = 'z';
  transl['И'] = 'I'; transl['и'] = 'i';
  transl['Й'] = 'J'; transl['й'] = 'j';
  transl['К'] = 'K'; transl['к'] = 'k';
  transl['Л'] = 'L'; transl['л'] = 'l';
  transl['М'] = 'M'; transl['м'] = 'm';
  transl['Н'] = 'N'; transl['н'] = 'n';
  transl['О'] = 'O'; transl['о'] = 'o';
  transl['П'] = 'P'; transl['п'] = 'p';
  transl['Р'] = 'R'; transl['р'] = 'r';
  transl['С'] = 'S'; transl['с'] = 's';
  transl['Т'] = 'T'; transl['т'] = 't';
  transl['У'] = 'U'; transl['у'] = 'u';
  transl['Ф'] = 'F'; transl['ф'] = 'f';
  transl['Х'] = 'X'; transl['х'] = 'x';
  transl['Ц'] = 'C'; transl['ц'] = 'c';
  transl['Ч'] = 'Ch'; transl['ч'] = 'ch';
  transl['Ш'] = 'Sh'; transl['ш'] = 'sh';
  transl['Щ'] = 'Shch'; transl['щ'] = 'shch';
  transl['Ъ'] = '"'; transl['ъ'] = '"';
  transl['Ы'] = 'Y\''; transl['ы'] = 'y\'';
  transl['Ь'] = '\''; transl['ь'] = '\'';
  transl['Э'] = 'E\''; transl['э'] = 'e\'';
  transl['Ю'] = 'Yu'; transl['ю'] = 'yu';
  transl['Я'] = 'Ya'; transl['я'] = 'ya';

  for (let i = 0; i < str.length; i++) {
    if (transl[str[i]] !== undefined) { result += transl[str[i]]; }
    else { result += str[i]; }
  }

  return (
    <div>
      <textarea value={text} onChange={event => setText(event.target.value)} />
      <p>{result}</p>
    </div>
  )
}

export default App;


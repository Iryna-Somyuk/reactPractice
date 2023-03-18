import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../redux/wordsSlice';

export function Form() {
    const dispatch = useDispatch();
    const handleSubmit = (evn)=> {
evn.preventDefault();
const word = {
    id: nanoid(6),
    engWord: evn.currentTarget.eng.value,
    ukrWord: evn.currentTarget.ukr.value,
    checked: false,
}
dispatch(addWord(word));
evn.currentTarget.reset();
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
<input type='text' name='eng' placeholder='English'/>
<input type='text' name='ukr' placeholder='Ukrainian'/>
<button type='submit'>Add word</button>
      </form>
    </div>
  )
}

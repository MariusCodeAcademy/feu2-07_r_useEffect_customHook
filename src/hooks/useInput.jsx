import { useState } from 'react';
// custom hook starts with use***
function useInput() {
  const [inputValue, setInputValue] = useState('');

  function inputHadler(event) {
    setInputValue(event.target.value);
  }

  // return [inputValue, inputHadler];
  return {
    value: inputValue,
    setter: inputHadler,
  };
}

export default useInput;

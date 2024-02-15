import { useRef, useState } from 'react'
import { useCallback, useEffect } from 'react';
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setNumber] = useState(false);
  const [isSpecialChar, setSpecialChar] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW";

    if (isNumber) str += "0123456789";
    if (isSpecialChar) str += "!@#$%^&*_-+=:;,.";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, isNumber, isSpecialChar, setPassword])

  //useRef hook
  const passwordRef=useRef(null); //reference to  the  input field

  //copying logic
  const copyToClipboard = useCallback(() => {

    passwordRef.current?.select(); //optionally select(what if there is no value)

    //can give selection range also
    passwordRef.current?.setSelectionRange(0,100);//  more than this range will not be selected

    window.navigator.clipboard.writeText(Password)
      .then(() => console.log("successfully copied"))
      .catch((err) => console.error("Failed to copy", err));
  }, [Password])

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isSpecialChar, passwordGenerator])



  return (
    <div className='w-full  max-w-lg mx-auto shadow-md rounded-lg px-4 py-3  my-8 bg-gray-700 text-white-500'>
      <h1 className='text-white text-center  font-bold text-xl' >Password Generator</h1>
      <br />
      <div className=' flex  shadow rounded-lg  gap-2'>
        <input
          type='text'
          value={Password}
          className='mt-3 outline-none w-full py-1 px-3 rounded-md'
          placeholder='password'
          readOnly
          ref={passwordRef} //to show the selected text in ui
        />
        <button
          className='outline-none bg-blue-600 text-white py-1 px-3 shrink-0 rounded-md mt-3'
          onClick={copyToClipboard}
        >copy</button>
      </div>
      <div className='flex justify-evenly text-sm gap-x-3 mt-4 text-gray-200 font-semibold'>
        <div className='flex  items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>length:{length}</label>
        </div>

        <div className='flex  items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={isNumber}
            id='numberInput'
            onChange={() => setNumber((prev) => !prev)}
          />
          <label>Number</label>
        </div>

        <div className='flex  items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={isSpecialChar}
            id='characterInput'
            onChange={() => setSpecialChar((prev) => !prev)}
          />
          <label>Special Character</label>
        </div>
      </div>
    </div>
  )
}

export default App

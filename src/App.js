import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/Passchar';

function App() {
  let [uppercase, setuppercase]=useState(false)
  let [lowercase, setlowercase]=useState(false)
  let[number,setnumber]=useState(false)
  let[symbols, setsymbol]=useState(false)
  let [passwordlen, setpasswordlen]=useState(10)
  let [fpass, setpass]=useState('')

  let createPassword=()=>{
    let finalpass=''
    let charSet=''
    if(uppercase || lowercase || number || symbols){
      if(uppercase) charSet+=UC
      if(lowercase) charSet+=LC
      if(number) charSet+=NC
      if(symbols) charSet+=SC
      for(let i=0; i<passwordlen; i++){
        finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setpass(finalpass)

    }
    else{
      alert('please select one checkbox...')
    }

  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className='PasswordBoxin'>
          <input type='text' value={fpass} readOnly /> <button onClick={copypass}>Copy</button>
        </div>
        <div className='passlength'>
          <label>Password length</label>
          <input type='number' max={28} min={7} value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)}/>
        </div>
        <div className='passlength'>
          <label>Include uppercase letter</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)} />

        </div>
        <div className='passlength'>
          <label>Include lowercase letter</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
        </div>
        <div className='passlength'>
          <label>include numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
        </div>
        <div className='passlength'>
          <label>Include symbol</label>
          <input type='checkbox' checked={symbols} onChange={()=>setsymbol(!symbols)} />
        </div>
        <button className='btn' onClick={createPassword}>Generate password</button>
      </div>
    </>
  );
}

export default App;

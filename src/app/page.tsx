'use client'

import React, {useState} from "react";
import { eventNames } from "process";

export default function HomePage() {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [selectType, setSelectType] = useState<string>('');

  const handeleSelectType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value;
    setSelectType(val);
  };

  const handleBtnClick = () => {
    alert({selectType});
  };

  function Count(a:number, b:number, type:string) {
    if (type == "+") {
      return a+b;
    }
    else if (type == "-") {
      return a-b;
    }
    else if (type == "*") {
      return a*b;
    }
    else if (type == "/") {
      return a/b;
    }
    else {
      return Error.name;
    }
  }

  return (
    <>
      <header className="bg-amber-400 py-2">
        <div>
          <h1 className="m-10 font-extrabold text-black" style={{fontSize: '48px', textAlign: 'center'}}>Welcome To The Calculator</h1>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center min-h-200">
        
        <output className="bg-slate-200 w-60 px-4 py-2 flex flex-col text-neutral-500 rounded-md m-5">Answer:{Count(parseInt(inputOne), parseInt(inputTwo), selectType)}</output>

        <div className="text-black flex flex-col justify-between gap-5 rounded-xl border">
          <input name="input1" value={inputOne} onChange={(event) => setInputOne(event.target.value)} placeholder="Enter first number" className="rounded-md px-3 py-2 w-60 bg-slate-200" type="number" />
          <input name="input2" value={inputTwo} onChange={(event) => setInputTwo(event.target.value)} placeholder="Enter second number" type="number" className="rounded-md px-3 py-2 bg-slate-200 w-60"  />
          <select className="bg-slate-200 rounded-md px-3 py-2" name="select1" value={selectType} onChange={handeleSelectType}>
            <option value="" disabled>Choose an option</option>
            <option value="optAdd">+</option>
            <option value="optSub">-</option>
            <option value="optMul">*</option>
            <option value="optDiv">/</option>
          </select>
        </div>

        <button onClick={handleBtnClick} className="m-10 rounded-md py-3 px-5 hover:shadow-amber-400 hover:shadow-xl hover:bg-yellow-400 
        hover:text-black text-2xl font-extrabold bg-yellow-600
        transition-all duration-1000">Count</button>

      </main>
      <footer>

      </footer>
    </>
  );
}
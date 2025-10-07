'use client'

import React, {useState} from "react";

export default function HomePage() {

  return (
    <>
      <header>
        <div>
          <h1 style={{ textAlign: 'center', margin: '20px', fontSize: '28px', fontWeight: 'bold' }}>Welcome To The Home Page</h1>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center min-h-200">
        <div className="text-black flex flex-col justify-between gap-5 rounded-xl border">
          <input placeholder="Enter first number" className="rounded-md px-3 py-2" style={{ background: 'oklch(92.9% 0.013 255.508)', width: '300px' }} type="text" />
          <input placeholder="Enter second number" type="text" className="rounded-md px-3 py-2" style={{ background: 'oklch(92.9% 0.013 255.508)', width: '300px' }}  />
        </div>
        <button className="m-10 rounded-md py-3 px-5 hover:shadow-amber-400 hover:shadow-xl hover:bg-yellow-400 
        hover:text-black text-2xl font-extrabold bg-yellow-600
        transition-all duration-1000">Count</button>
      </main>
    </>
  );
}
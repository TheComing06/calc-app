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
      <main>
        <div style={{margin: '20px'}}>
          <input className="rounded-md" style={{ background: 'oklch(92.9% 0.013 255.508)' }} type="text" />
          <input className="rounded-md" style={{ background: 'oklch(92.9% 0.013 255.508)' }} type="text"  />
        </div>
        <button style={{}}>Count</button>
      </main>
    </>
  );
}
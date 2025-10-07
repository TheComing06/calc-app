'use client'
import { Fragment } from "react";

export default function HomePage() {
  

  return (
    <>
      <header>
        <div>
          <h1 style={{ textAlign: 'center', margin: '20px', fontSize: '28px', fontWeight: 'bold' }}>Welcome To The Home Page</h1>
        </div>
      </header>
      <main>
        <div>
          <input style={{ background: 'oklch(92.9% 0.013 255.508)' }} type="text" />
          <button style={{}}>Count</button>
        </div>
      </main>
    </>
  );
}
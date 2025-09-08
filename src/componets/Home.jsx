import React from 'react'
import Nav from './Nav';
import Main from './Main';

function Home() {
  return (
    <div id="home" className="h-screen w-full bg-red-300">
      <Nav />
      <Main />
    </div>
  );
}

export default Home
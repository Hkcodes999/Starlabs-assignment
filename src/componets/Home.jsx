import React, { useState } from 'react'
import Nav from './Nav';
import Main from './Main';
import Routing from '../Routing/Routing';
import Filter1 from './Filter1';

function Home() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <div
      id="home"
      className="h-screen w-full bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 overflow-hidden"
    >
      <Nav />
      
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden px-4 py-2">
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="w-full px-4 py-2 bg-white/20 backdrop-blur-3xl rounded-lg text-white border border-white/30 hover:bg-white/30 transition-colors"
        >
          {showMobileFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {showMobileFilter && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setShowMobileFilter(false)}>
          <div className="absolute right-0 top-0 h-fit w-60 max-w-[85vw] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowMobileFilter(false)}
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            >
              ×
            </button>
            <Filter1 />
          </div>
        </div>
      )}

      <div id="home-page" className="flex w-full gap-2 md:gap-4 lg:gap-6">
        <div id="home-filter" className='hidden md:block sticky top-20 w-64 lg:w-72 xl:w-80 h-[calc(100vh-5rem)]'>
          <Filter1 />
        </div>
        <div id="routes" className='flex-1 h-[calc(100vh-5rem)] overflow-y-auto px-2 md:px-0'>
          <Routing />
        </div>
        
      </div>
    </div>
  );
}

export default Home
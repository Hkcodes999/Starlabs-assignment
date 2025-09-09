import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './componets/Home'

const App = () => {
  return (
    <div>
      <h1 style={{color: 'white', textAlign: 'center', padding: '20px'}}>
        Event Finder App - Testing Deployment
      </h1>
      <Home />
    </div>
  )
}

export default App
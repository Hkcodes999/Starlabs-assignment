import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from '../componets/Details';
import Main from '../componets/Main';
import Rsvp from '../componets/Rsvp';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail" element={<Details />}></Route>
      <Route path="/detail/:id" element={<Details />} />
      <Route path="/rsvp/:id" element={<Rsvp />} />
    </Routes>
  );
}

export default Routing
import React from 'react'

function Cards({event}) {
  return (
    <div id="cards" className="h-110 w-75 bg-gray-300 rounded-2xl p-5 border-1">
      <h2 className="text-lg font-semibold">Title: {event.title}</h2>
      <p>Type: {event.type}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Host: {event.host}</p>
    </div>
  );
}

export default Cards
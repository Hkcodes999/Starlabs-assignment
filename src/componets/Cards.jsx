import React from 'react'

function Cards({event}) {
  return (
    <div
      id="cards"
      className="h-110 w-75 text-black bg-white/50 backdrop-blur-3xl rounded-2xl p-5 border hover:scale-105 transition-transform duration-300"
    >
      <div id="card-img" className="h-50">
        <img
          src={event.img}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div id="cards-detail" className="mt-5">
        <h2 className="text-lg font-semibold">Title: {event.title}</h2>
        <p>Type: {event.type}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Host: {event.host}</p>
      </div>
    </div>
  );
}

export default Cards
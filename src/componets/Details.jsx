import React from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Details() {
  const { id } = useParams();
  const { events } = useEvents();
  const navigation = useNavigate();

  const event = events.find((e) => String(e.id) === id);

  if (!event) {
    return (
      <h1 className="text-red-500 w-screen bg-amber-600">Event not found</h1>
    );
  }

  return (
    <div id="detail" className="flex h-full flex-col px-10 py-6  w-full ">
      <div className="p-10 bg-white/30 backdrop-blur-3xl rounded-2xl hover:scale-101 transition-transform duration-300">
        <div id="detail-top" className="mb-5">
          <FaRegArrowAltCircleLeft
            className="text-4xl cursor-pointer"
            onClick={() => {
              navigation(-1);
            }}
          />
        </div>
        <div id="detail-img">
          <img src={event.img} alt="" className="h-50 w-screen object-cover mb-5 rounded-2xl" />
        </div>
        <h2 className="text-2xl font-bold">Title: {event.title}</h2>
        <h3 className="text-xl font-semibold">Type: {event.type}</h3>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Host: {event.host}</p>
        <Link to={`/rsvp/${event.id}`}>
          <button
            className="w-fit px-10 py-4 mt-4 text-xl text-black cursor-pointer rounded-2xl 
             bg-gray-300 hover:bg-black hover:text-white 
             hover:scale-105 transition-transform duration-1000"
          >
            Rsvp
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;

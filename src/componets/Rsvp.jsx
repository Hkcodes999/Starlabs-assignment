import React from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Rsvp() {
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
    <div id="rsvp" className="flex h-full flex-col p-10 w-full">
      <div className="p-10 bg-white/30 backdrop-blur-3xl rounded-2xl hover:scale-103 transition-transform duration-300">
        <div id="rsvp-top" className="mb-10">
          <FaRegArrowAltCircleLeft
            className="text-4xl cursor-pointer"
            onClick={() => {
              navigation(-1);
            }}
          />
        </div>
        <div
          id="rsvp-bottom"
          className="flex w-full flex-col items-center justify-center gap-1 "
        >
          <h2 className="text-4xl font-semibold flex items-center gap-3">
            Thanks for booking for the event:
            <FaCheckCircle className="text-green-500 text-5xl" />
          </h2>
          <h2 className="text-2xl font-semibold">Title: {event.title}</h2>
          <h3 className="text-xl font-semibold">{event.type}</h3>
          <p>Type: {event.type}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Host: {event.host}</p>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;

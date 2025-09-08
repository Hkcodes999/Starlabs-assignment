import React, { createContext, useContext, useEffect, useState } from "react";
import eventsData from "../data/events.json";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [rsvps, setRsvps] = useState({}); 

  useEffect(() => {
    setEvents(eventsData.events);
  }, []);

  function joinEvent(eventId, user) {
    setRsvps((prev) => {
      const existing = prev[eventId] || [];
      return { ...prev, [eventId]: [...existing, user] };
    });
  }

  function addEvent(newEvent) {
    setEvents((prev) => [...prev, { ...newEvent, id: prev.length + 1 }]);
  }

  return (
    <EventContext.Provider value={{ events, joinEvent, rsvps, addEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export const useEvents = () => useContext(EventContext);

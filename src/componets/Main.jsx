import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useEvents } from "../context/EventContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Main() {
  const { search } = useLocation();
  const { events } = useEvents();
  const [filters, setFilters] = useState({ type: [], date: [], location: [], search: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const parseList = (value) =>
      value && value.length > 0
        ? value.split(",").map((v) => v.trim()).filter(Boolean)
        : [];
    const type = parseList(params.get("type") || "");
    const date = parseList(params.get("date") || "");
    const location = parseList(params.get("location") || "");
    const searchTerm = params.get("search") || "";
    setFilters({ type, date, location, search: searchTerm });
  }, [search]);


  const filteredEvents = events.filter((e) => {
    let matches = true;
    if (filters.type.length) matches = matches && filters.type.includes(e.type);
    if (filters.date.length) matches = matches && filters.date.includes(e.date);
    if (filters.location.length) matches = matches && filters.location.includes(e.location);
    if (filters.search) matches = matches && e.title.toLowerCase().includes(filters.search.toLowerCase());
    return matches;
  });

  // Debug logging (removed for production)

  return (
    <div className="flex h-fit w-full gap-8 p-4 md:p-5 lg:p-10 items-start justify-center flex-wrap">
      <div className="w-full text-center text-white mb-4">
        <p>Events loaded: {events.length}</p>
        <p>Filtered events: {filteredEvents.length}</p>
        <p>Context working: {events.length > 0 ? 'Yes' : 'No'}</p>
      </div>
      {events.length === 0 ? (
        <h1 className="text-white text-xl">Loading events...</h1>
      ) : filteredEvents.length > 0 ? (
        filteredEvents.map((e, i) => (
          <Link to={`/detail/${e.id}`} key={i}>
            <Cards event={e} />
          </Link>
        ))
      ) : (
        <h1 className="text-white text-xl">No events match your filters</h1>
      )}
    </div>
  );
}

export default Main;

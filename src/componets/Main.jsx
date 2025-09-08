import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useEvents } from "../context/EventContext";
import { Link, useLocation } from "react-router-dom";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

function Main() {
  const { events } = useEvents();
  const [filters, setFilters] = useState({ type: "", date: "", location: "" });
  const [typeOpen, setTypeOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const type = params.get("type") || "";
    const date = params.get("date") || "";
    const location = params.get("location") || "";
    setFilters({ type, date, location });
  }, [search]);

  const filteredEvents = events.filter((e) => {
    let matches = true;
    if (filters.type) matches = matches && e.type === filters.type;
    if (filters.date) matches = matches && e.date === filters.date;
    if (filters.location) matches = matches && e.location === filters.location;
    return matches;
  });

  return (
    <div id="main" className="h-fit w-full bg-gray-200 flex">
      {/* Sidebar */}
      <div
        id="filter"
        className="h-screen w-80 bg-gray-200 border-r-1 flex-col gap-10 p-5 sticky top-0 overflow-auto"
      >
        {/* Type Filter */}
        <div
          id="type2"
          className="flex-col mb-6 bg-red-500 h-fit overflow-auto p-3 rounded-2xl"
        >
          <div className="flex items-center justify-between px-3 py-2">
            <button className="text-xl font-semibold" onClick={() => setFilters("")}>clear filter
            </button>
          </div>
        </div>

        <div
          id="type"
          className="flex-col mb-6 bg-red-200 h-fit overflow-auto p-3 rounded-2xl"
        >
          <div className="flex items-center justify-between px-3 py-2">
            <h1 className="text-2xl">Type</h1>
            <button onClick={() => setTypeOpen(!typeOpen)}>
              {typeOpen ? (
                <FaRegArrowAltCircleUp className="text-2xl" />
              ) : (
                <FaRegArrowAltCircleDown className="text-2xl" />
              )}
            </button>
          </div>
          <ul
            className={`flex-col px-5 overflow-auto transition-all duration-500 ease-in-out scrollbar-none rounded-lg ${
              typeOpen ? "max-h-80" : "max-h-0"
            }`}
          >
            {[...new Set(events.map((e) => e.type))].map((type, i) => (
              <li key={i} className="text-lg cursor-pointer py-1">
                <Link to={`?type=${type}`}>{type}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Date Filter */}
        <div
          id="Date"
          className="flex-col mb-6 bg-blue-200 h-fit overflow-hidden p-3 rounded-2xl"
        >
          <div className="flex items-center justify-between px-3 py-2">
            <h1 className="text-2xl">Date</h1>
            <button onClick={() => setDateOpen(!dateOpen)}>
              {dateOpen ? (
                <FaRegArrowAltCircleUp className="text-2xl" />
              ) : (
                <FaRegArrowAltCircleDown className="text-2xl" />
              )}
            </button>
          </div>
          <ul
            className={`flex-col px-5 overflow-auto transition-all duration-500 ease-in-out scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-gray-200 rounded-lg ${
              dateOpen ? "max-h-80" : "max-h-0"
            }`}
          >
            {[...new Set(events.map((e) => e.date))].map((date, i) => (
              <li key={i} className="text-lg cursor-pointer py-1">
                <Link to={`?date=${date}`}>{date}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div
          id="location"
          className="flex-col mb-6 bg-red-200 h-fit overflow-hidden p-3 rounded-2xl"
        >
          <div className="flex items-center justify-between px-3 py-2">
            <h1 className="text-2xl">Location</h1>
            <button onClick={() => setLocationOpen(!locationOpen)}>
              {locationOpen ? (
                <FaRegArrowAltCircleUp className="text-2xl" />
              ) : (
                <FaRegArrowAltCircleDown className="text-2xl" />
              )}
            </button>
          </div>
          <ul
            className={`flex-col px-5 overflow-auto transition-all duration-500 ease-in-out scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-gray-200 rounded-lg ${
              locationOpen ? "max-h-80" : "max-h-0"
            }`}
          >
            {[...new Set(events.map((e) => e.location))].map((location, i) => (
              <li key={i} className="text-lg cursor-pointer py-1">
                <Link to={`?location=${location}`}>{location}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Events */}
      <div className="flex h-fit w-screen gap-8 p-10 items-center justify-center flex-wrap ">
        {filteredEvents.map((e, i) => (
          <Cards key={i} event={e} />
        ))}
      </div>
    </div>
  );
}

export default Main;

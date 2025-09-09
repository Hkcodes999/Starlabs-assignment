import React, { useEffect, useState } from "react";
import { useEvents } from "../context/EventContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

function Filter1() {
  const { search } = useLocation();
  const { events } = useEvents();
  const [filters, setFilters] = useState({
    type: [],
    date: [],
    location: [],
    search: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const parseList = (value) =>
      value && value.length > 0
        ? value
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
        : [];

    const type = parseList(params.get("type") || "");
    const date = parseList(params.get("date") || "");
    const location = parseList(params.get("location") || "");
    const searchQuery = params.get("search") || "";

    setFilters({ type, date, location, search: searchQuery });
  }, [search]);

  function updateUrl(nextFilters) {
    const params = new URLSearchParams();
    if (nextFilters.type.length) params.set("type", nextFilters.type.join(","));
    if (nextFilters.date.length) params.set("date", nextFilters.date.join(","));
    if (nextFilters.location.length)
      params.set("location", nextFilters.location.join(","));
    if (nextFilters.search) params.set("search", nextFilters.search);
    const qs = params.toString();
    navigate(qs ? `?${qs}` : "/");
  }

  function handleSearch() {
    updateUrl(filters);
  }

  const filteredEvents = events.filter((e) => {
    let matches = true;
    if (filters.type.length) matches = matches && filters.type.includes(e.type);
    if (filters.date.length) matches = matches && filters.date.includes(e.date);
    if (filters.location.length)
      matches = matches && filters.location.includes(e.location);
    if (filters.search)
      matches =
        matches && e.title.toLowerCase().includes(filters.search.toLowerCase());
    return matches;
  });

  return (
    <div id="main" className="w-full flex mt-20 md:mt-0">
      {/* Sidebar Filters */}
      <div
        id="filter"
        className="w-full md:w-80 border-r-1 flex-col gap-6 p-3 md:p-5 sticky top-0 h-screen
             overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent 
             bg-white/20 backdrop-blur-3xl mb-10"
      >
        {/* 🔍 Search */}
        <div className="mb-2">
          <input
            type="text"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
            placeholder="Search by title..."
            className="w-full px-3 py-2 rounded-md border border-white-600 
           focus:outline-none focus:border-blue-500 
           focus:ring-2 focus:ring-blue-300 
           focus:bg-blue-560 transition mb-3 text-sm md:text-base 
           text-white placeholder-white"
          />
          <button
            onClick={handleSearch}
            className="w-full px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 text-sm md:text-base transition-colors"
          >
            Search
          </button>
        </div>

        {/* Clear Filters */}
        <div className="mb-4">
          <button
            className="w-full px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-400 text-sm md:text-base transition-colors"
            onClick={() => {
              const next = { type: [], date: [], location: [], search: "" };
              setFilters(next);
              updateUrl(next);
            }}
          >
            Clear filters
          </button>
        </div>

        {/* Type */}
        <div className="mb-6 bg-white/30 backdrop-blur-3xl rounded-xl p-3 md:p-4">
          <h3 className="mb-2 text-xl md:text-3xl font-semibold flex items-center gap-2 md:gap-3 justify-between">
            Type
            <span className="flex gap-1 md:gap-2">
              <IoMusicalNotes className="text-lg md:text-xl" />
              <CgGym className="text-lg md:text-xl" />
              <MdOutlineSportsBasketball className="text-lg md:text-xl" />
            </span>
          </h3>
          <div className="flex flex-col gap-2">
            {[...new Set(events.map((e) => e.type))].map((typeVal, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.type.includes(typeVal)}
                  onChange={() =>
                    setFilters((prev) => {
                      const set = new Set(prev.type);
                      set.has(typeVal) ? set.delete(typeVal) : set.add(typeVal);
                      const next = { ...prev, type: Array.from(set) };
                      updateUrl(next);
                      return next;
                    })
                  }
                />
                <span>{typeVal}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Date */}
        <div className="mb-6 bg-white/30 backdrop-blur-3xl rounded-xl p-3 md:p-4">
          <h3 className="mb-2 text-xl md:text-3xl font-semibold flex items-center gap-2 md:gap-3 justify-between">
            Date
            <span>
              <CiCalendarDate className="text-lg md:text-xl" />
            </span>
          </h3>
          <div className="flex flex-col gap-2">
            {[...new Set(events.map((e) => e.date))].map((dateVal, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.date.includes(dateVal)}
                  onChange={() =>
                    setFilters((prev) => {
                      const set = new Set(prev.date);
                      set.has(dateVal) ? set.delete(dateVal) : set.add(dateVal);
                      const next = { ...prev, date: Array.from(set) };
                      updateUrl(next);
                      return next;
                    })
                  }
                />
                <span>{dateVal}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6 bg-white/30 backdrop-blur-3xl rounded-xl p-3 md:p-4">
          <h3 className="mb-2 text-xl md:text-3xl font-semibold flex items-center gap-2 md:gap-3 justify-between">
            Location
            <span>
              <CiLocationOn className="text-lg md:text-xl" />
            </span>
          </h3>
          <div className="flex flex-col gap-2">
            {[...new Set(events.map((e) => e.location))].map((locVal, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.location.includes(locVal)}
                  onChange={() =>
                    setFilters((prev) => {
                      const set = new Set(prev.location);
                      set.has(locVal) ? set.delete(locVal) : set.add(locVal);
                      const next = { ...prev, location: Array.from(set) };
                      updateUrl(next);
                      return next;
                    })
                  }
                />
                <span>{locVal}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter1;

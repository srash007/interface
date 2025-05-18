import "./searchItem.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
const SearchItem = () => {
  const [hotelRooms, setHotelRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      const response = await axios.get("/room");
      const roomData = response.data.map((room) => ({
        location: room.location,
        capacity: room.capacity,
        checkIn: room.checkIn,
        checkOut: room.checkOut,
        minPrice: room.minPrice,
        maxPrice: room.maxPrice,
      }));
      setHotelRooms(roomData);
    }
    fetchRooms();
  }, []);

  // Render the fetched hotel room data in your component
  return (
    <div>
      <h1>Room List</h1>
      <ul>
      {hotelRooms.map((room, index) => (
          <li key={index}>
            <h2>Location: {room.location}</h2>
            <p>Capacity: {room.capacity}</p>
            <p>Check-in: {room.checkIn}</p>
            <p>Check-out: {room.checkOut}</p>
            <p>Minimum Price: {room.minPrice}</p>
            <p>Maximum Price: {room.maxPrice}</p>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default SearchItem;

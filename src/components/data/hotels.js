import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hotels = () => {
  const [hotelRooms, setHotelRooms] = useState([]);

  useEffect(() => {
    // Fetch hotel room data from server when the component mounts
    const fetchHotelRooms = async () => {
      try {
        const response = await axios.get('/hotel'); // Make GET request to your server
        setHotelRooms(response.data); // Update state with the fetched hotel room data
      } catch (error) {
        console.error('Error fetching hotel room data:', error);
      }
    };
    fetchHotelRooms();
  }, []);

  // Render the fetched hotel room data in your component
  return (
    <div>
      <h1>Hotel Rooms</h1>
      {hotelRooms.map(room => (
        <div key={room.id}>
          <h2>{room.roomNumber}</h2>
          <p>{room.description}</p>
          {/* Render other relevant data */}
        </div>
      ))}
    </div>
  );
};

export default Hotels;

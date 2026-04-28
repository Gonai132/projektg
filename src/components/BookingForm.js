import { useState } from "react";

function BookingForm({ availableTimes = [], dispatch = () => {} }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.length === 0 ? (
          <option>No times available</option>
        ) : (
          availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Graduation</option>
        <option>Other</option>
      </select>

      <button type="submit" className="submit-btn">
        Make Your reservation
      </button>

    </form>
  );
}

export default BookingForm;
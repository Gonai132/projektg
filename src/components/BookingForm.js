import { useState } from "react";

function BookingForm({ availableTimes = [], dispatch = () => {}, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  const isFormValid = () => {
    return date !== "" && time !== "" && guests >= 1 && guests <= 10;
  };

  const validate = () => {
    const newErrors = {};

    if (!date) newErrors.date = "Please select a date";
    if (!time) newErrors.time = "Please select a time";
    if (guests < 1) newErrors.guests = "Minimum 1 guest required";
    if (guests > 10) newErrors.guests = "Maximum 10 guests allowed";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Booking form"
      noValidate
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Choose date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
      />
      {errors.date && <p className="error">{errors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-label="Choose time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="" disabled>
          Select time
        </option>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        aria-label="Number of guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Graduation</option>
        <option>Other</option>
      </select>

      <button
        type="submit"
        className={`submit-btn ${!isFormValid() ? "disabled-style" : ""}`}
        aria-label="On Click"
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;
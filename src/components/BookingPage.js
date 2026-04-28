import BookingForm from "./BookingForm";

function BookingPage({ availableTimes = [], dispatch = () => {} }) {
  return (
    <section className="hero">
    <section className="container booking-page">
      <h1 className="page">Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </section>
    </section>
  );
}

export default BookingPage;
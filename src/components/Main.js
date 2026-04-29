import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchAPI } from "../api";

import greekSalad from "../img/greek-salad.jpg";
import bruschetta from "../img/bruchetta.svg";
import dessert from "../img/dessert.jpg";
import food from "../img/food.jpg";

import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date);
  }
  return state;
};

const submitAPI = () => true;

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <section className="hero main">
                <div className="container hero-content">

                  <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                      We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                    <button aria-label="On Click">
                      <Link to="/reservations">Reserve a Table</Link>
                    </button>
                  </div>

                  <div className="hero-img-wrapper">
                    <img src={food} alt="food" className="food-image"/>
                  </div>

                </div>
              </section>

              <section className="specials main">
                <div className="container">

                  <div className="specials-header">
                    <h2>This week's specials!</h2>
                    <button aria-label="On Click"><Link to="/reservations">Online Menu</Link></button>
                  </div>

                  <div className="cards">

                    <article className="card">
                      <img src={greekSalad} alt="Greek salad" />
                      <div className="card-header">
                        <h3>Greek Salad</h3>
                        <span className="price">$12.99</span>
                      </div>
                      <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                      </p>
                       <Link to="/order">Order Online</Link>
                    </article>

                    <article className="card">
                      <img src={bruschetta} alt="Bruschetta" />
                      <div className="card-header">
                        <h3>Bruschetta</h3>
                        <span className="price">$5.99</span>
                      </div>
                      <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                      </p>
                       <Link to="/order">Order Online</Link>
                    </article>

                    <article className="card">
                      <img src={dessert} alt="Lemon dessert" />
                      <div className="card-header">
                        <h3>Lemon Dessert</h3>
                        <span className="price">$5.00</span>
                      </div>
                      <p>
                        This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as it can be imagined.
                      </p>
                       <Link to="/order">Order Online</Link>
                    </article>

                  </div>
                </div>
              </section>
            </>
          }
        />

        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route path="/confirmed" element={<ConfirmedBooking />} />

      </Routes>
    </main>
  );
}

export default Main;

export { initializeTimes, updateTimes };
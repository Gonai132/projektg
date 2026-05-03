import food from "../img/restaurant2.jpg";

function Order() {
  return (
    <section className="hero pages">
      <div className="container">

        <h1 className="page page2 order-title">Order Online</h1>

        <div className="about">

          <div className="about-text">
            <p className="bold">
              Online ordering will be available soon.
            </p>

            <p>
              We are currently working on launching our online ordering system 
              to make your experience even more convenient.
            </p>

            <p>
              For now, please place your order by phone:
            </p>

            <a href="tel:+1123456789" className="phone-btn">
              +1 123 456 789
            </a>

            <p>
              Thank you for your patience and support!
            </p>
          </div>

          <div className="order-img">
            <img src={food} alt="Delicious food" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Order;
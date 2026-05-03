import food from "../img/restaurant.jpg";

function Login() {
  return (
    <section className="hero pages">
      <div className="container">

        <h1 className="page page2 order-title">Login</h1>

        <div className="about">
           <div className="order-img">
            <img src={food} alt="Restaurant interior" />
          </div>

          <div className="about-text">
            <p className="bold">
              The account system will be available soon.
            </p>

            <p>
              We are currently working on expanding our website and adding new 
              features, including user accounts and login functionality.
            </p>

            <p>
              Soon you will be able to create your own account, manage reservations 
              and orders more easily.
            </p>

            <p className="bold">
              Thank you for your patience!
            </p>
          </div>

         

        </div>

      </div>
    </section>
  );
}

export default Login;
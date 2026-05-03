import logoV from "../img/logoV.png";

function About() {
  return (
    <section className="hero pages">
      <div className="container about">

        <div className="about-img">
          <img src={logoV} alt="Little Lemon restaurant" />
        </div>

        <div className="about-text">
          <h1 className="page page2">About Little Lemon</h1>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in Chicago. 
            We focus on traditional recipes served with a modern twist, using fresh and 
            locally sourced ingredients.
          </p>

          <p>
            Our chefs combine authentic flavors with creative presentation to deliver 
            a unique dining experience. Whether you’re visiting for a quick lunch or 
            a special dinner, we aim to make every moment memorable.
          </p>

          <p>
            At Little Lemon, we believe food brings people together - and we’re proud 
            to be part of your everyday moments and celebrations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
import greekSalad from "../img/greek-salad.jpg";
import bruschetta from "../img/bruchetta.svg";
import dessert from "../img/dessert.jpg";
import pasta from "../img/pasta.jpg";
import pizza from "../img/pizza.jpg";
import iceCream from "../img/icecream.jpg";
import risotto from "../img/risotto.jpg";
import grilledChicken from "../img/chicken.jpg";
import chocolateCake from "../img/cake.jpg";

function Menu() {
  return (
    <section className="hero pages main">
      <div className="container">
        <h1 className="page page2">Menu</h1>
        <p className="page-description">
          Explore our delicious menu, featuring a variety of Mediterranean dishes made with fresh ingredients and traditional recipes. Join us at Little Lemon and experience the flavors of the Mediterranean in every bite.
        </p>

        <div className="cards">

          <article className="card">
            <img src={greekSalad} alt="Greek salad" />
            <div className="card-header">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              Fresh lettuce, tomatoes, olives and feta cheese with olive oil.
            </p>
          </article>

          <article className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-header">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Grilled bread with garlic, olive oil and fresh tomatoes.
            </p>
          </article>

          <article className="card">
            <img src={dessert} alt="Lemon dessert" />
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div>
            <p>
              Homemade lemon cake with fresh cream and citrus flavor.
            </p>
          </article>

          <article className="card">
            <img src={pasta} alt="Pasta" />
            <div className="card-header">
              <h3>Pasta</h3>
              <span className="price">$10.50</span>
            </div>
            <p>
              Classic Italian pasta with tomato sauce and herbs.
            </p>
          </article>

          <article className="card">
            <img src={pizza} alt="Pizza" />
            <div className="card-header">
              <h3>Pizza</h3>
              <span className="price">$11.99</span>
            </div>
            <p>
              Thin crust pizza with mozzarella and fresh toppings.
            </p>
          </article>

          <article className="card">
            <img src={iceCream} alt="Ice cream" />
            <div className="card-header">
              <h3>Ice Cream</h3>
              <span className="price">$4.50</span>
            </div>
            <p>
              Creamy vanilla ice cream with seasonal fruits.
            </p>
          </article>

          <article className="card">
            <img src={risotto} alt="Risotto" />
            <div className="card-header">
              <h3>Risotto</h3>
              <span className="price">$13.50</span>
            </div>
            <p>
              Creamy risotto with parmesan cheese and fresh herbs.
            </p>
          </article>

          <article className="card">
            <img src={grilledChicken} alt="Grilled Chicken" />
            <div className="card-header">
              <h3>Grilled Chicken</h3>
              <span className="price">$14.99</span>
            </div>
            <p>
              Juicy grilled chicken served with vegetables and sauce.
            </p>
          </article>

          <article className="card">
            <img src={chocolateCake} alt="Chocolate Cake" />
            <div className="card-header">
              <h3>Chocolate Cake</h3>
              <span className="price">$6.50</span>
            </div>
            <p>
              Rich chocolate cake with soft cream and cocoa topping.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Menu;
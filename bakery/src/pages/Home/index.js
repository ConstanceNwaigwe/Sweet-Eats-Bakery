import "./styles.css";
import React from "react";
import { homeData } from "./data";

function Home() {
  return (
    <div className="home_page">
      <div className="home_page_nav">
        <div className="home_page_nav_items">
          <h6>SweetEatsBakery</h6>
          <h6>Menu</h6>
        </div>
      </div>

      <div className="home_page_intro">
        <div className="home_page_intro_items">
          <div className="home_page_intro_items_separator" />
          <h1>
            <em>Sweet Eats Bakery</em>
          </h1>
          <div className="home_page_intro_items_separator" />
        </div>
      </div>

      <div className="home_page_about">
        <div className="home_page_about_items">
          <h3>Welcome to Sweet Eats Bakery</h3>
          <p>
            Marzipan jelly-o macaroon I love macaroon jujubes. Candy candy canes
            jujubes I love ice cream croissant. Lollipop donut icing I love
            liquorice gummi bears marzipan. Dragée jelly beans apple pie cotton
            candy lemon drops pastry candy msg powder.
          </p>
          <p>
            Marzipan jelly-o macaroon I love macaroon jujubes. Candy candy canes
            jujubes I love ice cream croissant. Lollipop donut icing I love
            liquorice gummi bears marzipan. Dragée jelly beans apple pie cotton
            candy lemon drops pastry candy msg powder.
          </p>
        </div>
      </div>

      <div className="home_page_menu">
        <div className="home_page_menu_items">
          <div className="home_page_menu_items_separator" />
          <h1>
            <em>Discover Our Menu</em>
          </h1>
          <div className="home_page_menu_items_separator" />
        </div>
      </div>
      <div className="home_page_menu">
        <div className="home_page_menu_items">
          <p>
            The menu consist of candy apple pie lemon drops sweet roll Danish.
            Tiramisu candy canes jelly-o jelly beans cotton candy pastry pudding
            tootsie roll carrot cake.
          </p>
          <div />
          <h3>Dessert Menu</h3>
          <div className="home_page_menu_items_desserts">
            {homeData.map((data) => {
              return (
                <div className="home_page_menu_items_dessert">
                  <h4>{data.heading}</h4>
                  <p>{data.describtion}</p>
                  <p>{data.cost}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <button>View Full Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };

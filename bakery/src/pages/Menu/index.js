import "./styles.scss";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Breakfast, Desserts, Drinks } from "./data";
import { Footer } from "../../components/footer";

function Menu() {
  return (
    <div className="menu_page">
      <div className="menu_page_nav">
        <div className="menu_page_nav_items">
          <Link to="/home">
            <h6>SweetEatsBakery</h6>
          </Link>
          <Link to="/home">
            <h6>Home</h6>
          </Link>
        </div>
      </div>
      <div className="menu_page-content">
        <h1 className="menu_page-content-heading">Menu</h1>
        <p className="menu_page-content-subheading">
          The menu consist of candy apple pie lemon drops sweet roll Danish.
          Tiramisu candy canes jelly-o jelly beans cotton candy pastry pudding
          tootsie roll carrot cake.
        </p>
        <div className="menu_page-content-seperator" />
        <div className="menu_page-content-food">
          <h2 className="menu_page-content-food-heading">Breakfast</h2>
          <div className="menu_page-content-food-items">
            {Breakfast.map((data) => {
              return (
                <div>
                  <h5>{data.heading}</h5>
                  <p>{data.subheading}</p>
                  <p>{data.cost}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="menu_page-content-seperator" />
        <div className="menu_page-content-food">
          <h2 className="menu_page-content-food-heading">Desserts</h2>
          <div className="menu_page-content-food-items">
            {Desserts.map((data) => {
              return (
                <div>
                  <h5>{data.heading}</h5>
                  <p>{data.subheading}</p>
                  <p>{data.cost}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="menu_page-content-seperator" />
        <div className="menu_page-content-food">
          <h2 className="menu_page-content-food-heading">Drinks</h2>
          <div className="menu_page-content-food-items">
            {Drinks.map((data) => {
              return (
                <div>
                  <h5>{data.heading}</h5>
                  <p>{data.subheading}</p>
                  <p>{data.cost}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="menu_page-content-seperator" />
        <p className="menu_page-content-footer">
          Our bakeries are baked fresh and ready to be eaten.
        </p>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}

export { Menu };

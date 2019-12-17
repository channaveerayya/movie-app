import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          id="nav-toggle"
          className="navigation__checkbox"
        />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink exact to="/" className="navigation__link">
                <span>01</span>
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink exact to="/search" className="navigation__link">
                <span>02</span>
                Search Films
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink exact to="/popular" className="navigation__link">
                <span>03</span>
                Popular Films
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink exact to="/book" className="navigation__link">
                <span>04</span>
                Book Now
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

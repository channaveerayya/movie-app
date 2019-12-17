import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import log_xl from "../../img/spider.png";
const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src={log_xl}
          alt="full logo"
          className="footer__logo"
          id="footerImg"
        />
        <div className=" heading-primary">
          <h5
            className="heading-primary--main"
            style={{ fontSize: "2rem", letterSpacing: "1rem" }}
          >
            React Movie App
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Company
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Contact us
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Carrers
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Privacy policy
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built my{" "}
            <Link to="/" className="footer__link">
              Channu BS
            </Link>
            , For this Templete Source code available in my
            <Link to="/" className="footer__link">
              GitHub
            </Link>{" "}
            repository, Copyright &copy; by ChannuBs
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

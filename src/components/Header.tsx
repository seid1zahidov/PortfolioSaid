import React, { useState } from "react";
import "../assets/scss/Header/Header.css";
import "../assets/global/global.css";
import responsiveMenu from "../img/Responsive_menu.png";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible((prev) => !prev);
  }
  // const button = document.getElementById("Btn_burger_ID");
  // const Responsive_UL = document.getElementById("Responsive_UL");
  // button?.addEventListener("click", () => {
  // });

  return (
    <section className="Header">
      <div className="Header-container">
        <ul
          className="Header-list_logo"
          style={{
            height: "100px",
            borderRight: "1px solid #D7D7D7",
            borderLeft: "1px solid #D7D7D7",
          }}
        >
          <li>
            <strong className="Fullname">© Said ZAHIDOV</strong>
            <div style={{ color: "#D7D7D7" }} className="SameText">
              Design & Built by Zahidovs’
            </div>
            <div id="Btn_burger_ID">
              <button onClick={toggleMenu} className="responsive_menu_item">
                <img src={responsiveMenu} alt="Menu_responsive" />
              </button>
            </div>
          </li>
        </ul>

        <div className="Header_details">
          <ul
            className="Response_Ul"
            style={{
              height: "100px",
              borderRight: "1px solid #D7D7D7",
              display: menuVisible ? "block" : undefined,
            }}
          >
            <li className="Header-list">
              <div className="SameText">Status</div>
              <div className="SameColor">
                Currently available for any type of collaboration
              </div>
            </li>
          </ul>
          <ul
            className="Response_Ul"
            style={{
              height: "100px",
              borderRight: "1px solid #D7D7D7",
              display: menuVisible ? "block" : undefined,
            }}
          >
            <li className="Header-list">
              <div className="SameText">Let’s work</div>
              <div className="SameColor">
                Email: <br />
                <a href="mailto:seid.zahidov1@gmail.com?subject=Salam&body=Mən səninlə əməkdaşlıq etmək istəyirəm.">
                  seid.zahidov1@gmail.com
                </a>
              </div>
            </li>
          </ul>
          <ul
            className="Response_Ul"
            style={{
              height: "100px",
              borderRight: "1px solid #D7D7D7",
              display: menuVisible ? "block" : undefined,
            }}
          >
            <li className="Header-list">
              <div className="SameText">Say hi</div>
              <div className="SameColor">
                Phone: <br />
                <a href="tel:+994503606622">+994 (50) 360 66 22</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;

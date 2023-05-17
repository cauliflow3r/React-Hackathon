import React, { useEffect, useState } from "react";
import "../components/Styles/HomePage.css";
import icon_black from "../components/svg/login.png";
import step2 from "../components/svg/Screenshot 2023-05-17 at 23.20.48.png";
import step4 from "../components/svg/draw.png";
import step5 from "../components/svg/gallery.png";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let active = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          active = section.id;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper">
      <nav className="nav__wrapper" id="navbar-example">
        <ul className="nav">
          <li className={activeSection === "section1" ? "active" : ""}>
            <a href="#section1">
              <span className="nav__counter">01</span>
              <h3 className="nav__title">Step</h3>
              <p className="nav__body">
                <strong>Приветствуем вас на нашем сайте</strong>. Скрольте вниз
                .
              </p>
            </a>
          </li>
          <li className={activeSection === "section2" ? "active" : ""}>
            <a href="#section2">
              <span className="nav__counter">02</span>
              <h3 className="nav__title">Step</h3>
              <p className="nav__body">Зарегистрируйтесь.</p>
            </a>
          </li>
          <li className={activeSection === "section3" ? "active" : ""}>
            <a href="#section3">
              <span className="nav__counter">03</span>
              <h3 className="nav__title">Step</h3>
              <p className="nav__body">войдите в свой аккаунт</p>
            </a>
          </li>
          <li className={activeSection === "section4" ? "active" : ""}>
            <a href="#section4">
              <span className="nav__counter">04</span>
              <h3 className="nav__title">Step</h3>
              <p className="nav__body">нарисуйте что-то</p>
            </a>
          </li>
          <li className={activeSection === "section5" ? "active" : ""}>
            <a href="#section5">
              <span className="nav__counter">05</span>
              <h3 className="nav__title">Step</h3>
              <p className="nav__body">Зайдите в галерею</p>
            </a>
          </li>
          <li className={activeSection === "section6" ? "active" : ""}>
            <a href="#section6">
              <span className="nav__counter">06</span>
              <h3 className="nav__title">Step</h3>
              <p className="nav__body">Потыкайте по сайту .</p>
            </a>
          </li>
        </ul>
      </nav>

      <section
        className={`section section1 ${
          activeSection === "section1" ? "active" : ""
        }`}
        id="section1"
      >
        Hello World!
      </section>
      <section
        className={`section section2 ${
          activeSection === "section2" ? "active" : ""
        }`}
        id="section2"
      >
        <img src={step2} style={{ maxWidth: "400px" }} alt="" />
      </section>
      <section
        className={`section section3 ${
          activeSection === "section3" ? "active" : ""
        }`}
        id="section3"
      >
        <img src={icon_black} alt="" />
      </section>
      <section
        className={`section section4 ${
          activeSection === "section4" ? "active" : ""
        }`}
        id="section4"
      >
        <img src={step4} style={{ maxWidth: "400px" }} alt="" />
      </section>
      <section
        className={`section section5 ${
          activeSection === "section5" ? "active" : ""
        }`}
        id="section5"
      >
        <img src={step5} style={{ maxWidth: "400px" }} alt="" />
      </section>
      <section
        className={`section section6 ${
          activeSection === "section6" ? "active" : ""
        }`}
        id="section6"
      >
        ТЫК! ТЫК!
      </section>
    </div>
  );
};

export default HomePage;

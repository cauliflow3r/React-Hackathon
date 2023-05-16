import React, { useEffect, useState } from "react";
import "../components/Styles/HomePage.css";

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
              <h3 className="nav__title">Intro</h3>
              <p className="nav__body">
                <strong>Timeline-style navigation</strong>. Scroll down to see
                what happens, or click on a number in the nav.
              </p>
            </a>
          </li>
          <li className={activeSection === "section2" ? "active" : ""}>
            <a href="#section2">
              <span className="nav__counter">02</span>
              <h3 className="nav__title">Section 2 Title</h3>
              <p className="nav__body">
                Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius
                mi, sit amet condimentum lacus.
              </p>
            </a>
          </li>
          <li className={activeSection === "section3" ? "active" : ""}>
            <a href="#section3">
              <span className="nav__counter">03</span>
              <h3 className="nav__title">Section 3 Title</h3>
              <p className="nav__body">
                Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius
                mi, sit amet condimentum lacus.
              </p>
            </a>
          </li>
          <li className={activeSection === "section4" ? "active" : ""}>
            <a href="#section4">
              <span className="nav__counter">04</span>
              <h3 className="nav__title">Section 4 Title</h3>
              <p className="nav__body">
                Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius
                mi, sit amet condimentum lacus.
              </p>
            </a>
          </li>
          <li className={activeSection === "section5" ? "active" : ""}>
            <a href="#section5">
              <span className="nav__counter">05</span>
              <h3 className="nav__title">Section 5 Title</h3>
              <p className="nav__body">
                Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius
                mi, sit amet condimentum lacus.
              </p>
            </a>
          </li>
          <li className={activeSection === "section6" ? "active" : ""}>
            <a href="#section6">
              <span className="nav__counter">06</span>
              <h3 className="nav__title">Section 6 Title</h3>
              <p className="nav__body">
                Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius
                mi, sit amet condimentum lacus.
              </p>
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
        Scroll down or use the nav.
      </section>
      <section
        className={`section section2 ${
          activeSection === "section2" ? "active" : ""
        }`}
        id="section2"
      >
        Section 2
      </section>
      <section
        className={`section section3 ${
          activeSection === "section3" ? "active" : ""
        }`}
        id="section3"
      >
        Section 3
      </section>
      <section
        className={`section section4 ${
          activeSection === "section4" ? "active" : ""
        }`}
        id="section4"
      >
        Section 4
      </section>
      <section
        className={`section section5 ${
          activeSection === "section5" ? "active" : ""
        }`}
        id="section5"
      >
        Section 5
      </section>
      <section
        className={`section section6 ${
          activeSection === "section6" ? "active" : ""
        }`}
        id="section6"
      >
        Section 6
      </section>
    </div>
  );
};

export default HomePage;

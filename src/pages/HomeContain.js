import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import logo from "../images/logo.png";

const HomeContain = () => {
  const [themeColor, setThemeColor] = useState("light");
  const [isThemeSolar, setIsThemeSolar] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("theme");
    // const value = localStorage.theme;
    const isSolar = localStorage.getItem("isSolar");
    if (value) {
      setThemeColor(value);
      setIsThemeSolar(!!isSolar);
    }
  }, []);

  return (
    <body className={`${themeColor} ${isThemeSolar && "solar"}`}>
      
      <nav className={styles.navbar}>
        <ul className={`${styles.navbarNav}`}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          {/* Dropdown */}
          <li className={styles.hasDropdown}>
            <a href="#">Theme</a>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>
                <a
                  onClick={() => {
                    setThemeColor("light");
                    localStorage.setItem(
                      "theme",
                      themeColor ? "light" : "dark"
                    );
                  }}
                  id={styles.light}
                />
                light
              </li>
              <li className={styles.dropdownItem}>
                <a
                  onClick={() => {
                    setThemeColor("dark");
                    localStorage.setItem(
                      "theme",
                      themeColor ? "dark" : "light"
                    );
                    // localStorage.theme = themeColor ? "dark" : "light"
                  }}
                  id={styles.dark}
                />
                dark
              </li>
              <li className={styles.dropdownItem}>
                <a
                  onClick={() => {
                    // setIsThemeSolar(!isThemeSolar);

                    setIsThemeSolar((prev) => {
                      !prev
                        ? localStorage.setItem("isSolar", true)
                        : localStorage.removeItem("isSolar");
                      return !prev;
                    });
                  }}
                  style={{
                    "--bg-solar": isThemeSolar ? "white" : "var(--yellow)"
                  }}
                  id={styles.solar}
                />
                {isThemeSolar ? "normalize" : "solarize"}
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>Login</li>
        </ul>
      </nav>
      
      <header>
        <Image src={logo} alt={logo} className={styles.logo} />
        <h1>
          Front-End Web Development, <br /> Fired Up
        </h1>
        <p>NextJs, Firebase, MongoDB, Javascript, Node.js</p>
      </header>

      <main>
        <h3>Sailor ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          minus incidunt error voluptatibus dignissimos suscipit. Delectus
          excepturi perspiciatis voluptatibus soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum,
          perspiciatis molestias dicta beatae tenetur quam amet a tempora quod,
          magni ut aliquam ducimus, odit nam mollitia similique labore?
          Incidunt, quo aut dolorem quia temporibus iste.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          nemo! Expedita officiis fuga quisquam neque in dicta impedit nobis
          adipisci, voluptas minus dolorum deserunt dolore doloribus magni
          suscipit aperiam ipsum iste rem nulla, omnis a, cumque exercitationem
          modi sint. Ducimus!
        </p>
        <h3>Sailor kdoh</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          exercitationem perspiciatis nulla, libero, tempore quisquam delectus
          nisi voluptates ad quod corporis. Neque perferendis maxime explicabo
          incidunt laborum nostrum velit veniam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          exercitationem perspiciatis nulla, libero, tempore quisquam delectus
          nisi voluptates ad quod corporis. Neque perferendis maxime explicabo
          incidunt laborum nostrum velit veniam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          exercitationem perspiciatis nulla, libero, tempore quisquam delectus
          nisi voluptates ad quod corporis. Neque perferendis maxime explicabo
          incidunt laborum nostrum velit veniam?
        </p>
      </main>

    </body>
  );
};

export default HomeContain;

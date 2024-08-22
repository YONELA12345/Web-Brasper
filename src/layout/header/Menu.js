import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { Accordion } from "react-bootstrap";
import { useLocale } from "../../../context/LocaleContext"; // Asegúrate de importar el contexto de idioma

const Menu = () => {
  const { locale, changeLocale, t } = useLocale();
  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    changeLocale(selectedLocale);
  }, [selectedLocale, changeLocale]);

  return (
    <Fragment>
      <DeskTopMenu
        selectedLocale={selectedLocale}
        setSelectedLocale={setSelectedLocale}
        t={t}
      />
      <MobileMenu
        selectedLocale={selectedLocale}
        setSelectedLocale={setSelectedLocale}
        t={t}
      />
    </Fragment>
  );
};

const MobileMenu = ({ selectedLocale, setSelectedLocale, t }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo_principal.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <Link href="/" onClick={() => active("home")}>
                {t.navbar.home} {/* Traducción de "Inicio" */}
              </Link>
            </li>
            <li className="dropdown">
              <Link href="" onClick={() => active("services")}>
                {t.navbar.services} {/* Traducción de "Servicios" */}
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/about">{t.navbar.about}</Link>
            </li>
            <li className="dropdown">
              <Link href="#">{t.navbar.howItWorks}</Link>
            </li>
            {/* Selector de idioma */}
            <li className="dropdown">
              <select
                value={selectedLocale}
                onChange={(e) => setSelectedLocale(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = ({ selectedLocale, setSelectedLocale, t }) => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu ">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo_principal.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="dropdown">
            <Link href="/">{t.navbar.home}</Link> {/* Traducción de "Inicio" */}
          </li>
          <li className="dropdown">
            <Link href="#">{t.navbar.services}</Link>{" "}
            {/* Traducción de "Servicios" */}
          </li>
          <li className="dropdown">
            <Link href="/about">{t.navbar.about}</Link>{" "}
            {/* Traducción de "¿Quiénes somos?" */}
          </li>
          <li className="dropdown">
            <Link href="#">{t.navbar.howItWorks}</Link>{" "}
            {/* Traducción de "¿Cómo funciona?" */}
          </li>
          {/* Selector de idioma */}
          <li className="dropdown">
            <select
              value={selectedLocale}
              onChange={(e) => setSelectedLocale(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                padding: "5px",
                borderRadius: "4px",
              }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

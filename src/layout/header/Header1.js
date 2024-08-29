import Link from "next/link";
import Menu from "./Menu";
import { useLocale } from "../../../context/LocaleContext"; // Importa el contexto de idioma

const Header1 = () => {
  const { locale, changeLocale, t } = useLocale(); // Usa el contexto de idioma

  return (
    <header className="main-header header-one menu-white">
      <div className="header-top-wrap bgc-header1">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="far fa-envelope" />{" "}
                <a
                  href="mailto:brasper@braspertransferencias.com"
                  style={{ color: "#fff" }}
                >
                  brasper@braspertransferencias.com
                </a>
              </li>
              <li>
                <i className="far fa-phone" />{" "}
                <a href="callto:+51966991933" style={{ color: "#fff" }}>
                  +51 966991933
                </a>
              </li>
              <li className="for-none" style={{ color: "#fff" }}>
                <i className="far fa-clock" />
                {t.header.hours} {/* Traducir el texto */}
              </li>
              <li>
                <div className="social-style-one">
                  <a
                    href="https://www.facebook.com/BrasPerTransferencias"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@braspertransferencias"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    <i className="fab fa-tiktok" />
                  </a>
                  <a
                    href="https://www.instagram.com/brasper.transferencias"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brasper-transferencias-7a7b7b311/"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper bgc-black">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <img
                    src="assets/images/logos/logo_principal.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End */}
            </div>
            <div className="menu-btns">
              <Link legacyBehavior href="login" >
                <a className="theme-btn" >
                  {t.header.login} <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="menu-btns">
              <Link legacyBehavior href="/about">
                <a className="theme-btn style-three">
                  Registrate <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;

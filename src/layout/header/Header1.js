import Link from "next/link";
import Search from "../Search";
import Menu from "./Menu";

const Header1 = () => {
  return (
    <header className="main-header header-one menu-white">
      <div className="header-top-wrap bgc-gray">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="far fa-envelope" />{" "}
                <a href="mailto:support@gmail.com">info@braspertransferencias.com</a>
              </li>
              <li>
                <i className="far fa-phone" />{" "}
                <a href="callto:+000(123)45688">+000 (123) 456 88</a>
              </li>
              <li className="for-none">
                <i className="far fa-clock" />atendemos de 8:30 am / 5:00 pm
              </li>
              <li>
                <div className="social-style-one">
                  <a href="https://www.facebook.com/BrasPerTransferencias" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias" target="_blank">
                  <i className="fab fa-tiktok" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </li>
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
                <Link legacyBehavior href="/index">
                  <a>
                    <img
                      src="assets/images/logos/logo_principal.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-10">
              <Search />
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Contactanos <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header1;

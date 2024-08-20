import Link from "next/link";
import Search from "../Search";
import Menu from "./Menu";

const Header1 = () => {
  return (
    <header className="main-header header-one menu-white">
      <div className="header-top-wrap bgc-header1">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="far fa-envelope" />{" "}
                <a href="mailto:brasper@braspertransferencias.com" style={{color: '#fff'}}>brasper@braspertransferencias.com</a>
              </li>
              <li>
                <i className="far fa-phone" />{" "}
                <a href="callto:+51966991933" style={{color: '#fff'}}>+51 966991933</a>
              </li>
              <li className="for-none" style={{color: '#fff'}}>
                <i className="far fa-clock" />atendemos de 8:30 am / 14:00 pm
              </li>
              <li>
                <div className="social-style-one">
                  <a href="https://www.facebook.com/BrasPerTransferencias" target="_blank" style={{color: '#fff'}}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.tiktok.com/@braspertransferencias" target="_blank" style={{color: '#fff'}}>
                  <i className="fab fa-tiktok" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias" target="_blank" style={{color: '#fff'}}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/brasper-transferencias-7a7b7b311/" target="_blank" style={{color: '#fff'}}>
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
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <div className="nav-search py-10">
              <Search />
            </div> */}
            {/* Menu Button */}
            <div className="menu-btns">
              {/* <Link legacyBehavior href="/contact" target="_blank"> */}
              <Link legacyBehavior href="https://rb.gy/vjpce3" target="_blank">
                <a className="theme-btn" target="_blank">
                  Contactanos <i className="fas fa-long-arrow-right" />
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

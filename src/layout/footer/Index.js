import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer bgc-header1 footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title"> ¿Que si somos la mejor opcion?</span>
              <h2>Somos la mejor opción, escogenos</h2>
            </div>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn style-three wow fadeInRight delay-0-2s">
                  Informate mas <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone" />
              <div className="content">
                <span>Llamanos</span>
                <br />
                <a href="callto:+51 966991933">+51 966991933</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-30">
                <Link legacyBehavior href="/index">
                  <a>
                    <img src="assets/images/logos/logo_completo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
              <p>
                Brasper es una empresa especializada en servicios de cambio de divisas, 
                enfocada principalmente en la conversión de reales brasileños a soles 
                peruanos y viceversa, así como en el intercambio de dólares estadounidenses. 
              </p>
              <Link legacyBehavior href="/about">
                <a className="read-more">
                  Informate mas <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Contactanos</h4>
              <p>
                Puedes escribiernos al siguiente correo, te ayudaremos con gusto
              </p>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                
              <li>
                <i className="far fa-envelope" />{" "}
                <a href="mailto:brasper@braspertransferencias.com">brasper@braspertransferencias.com</a>
              </li>
                {/* <button>Sign Up</button> */}
              </form>
              <h5>SIGUENOS</h5>
                <div className="social-style-one">
                  <a href="https://www.facebook.com/BrasPerTransferencias" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.tiktok.com/@braspertransferencias" target="_blank">
                  <i className="fab fa-tiktok" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/brasper-transferencias-7a7b7b311/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Servicios</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link
                        legacyBehavior
                        href="about"
                      >{`Transferencias`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">{`Cotización`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="services"
                      >{`Divisas`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="project-grid"
                      >{`Asesoría`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="faqs"
                      >{`Fidelización`}</Link>
                    </li>
                    {/* <li>
                      <Link
                        legacyBehavior
                        href="blog"
                      >{`Blog &amp; News`}</Link>
                    </li> */}
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">¿Quienes somos?</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="about">
                        <a>Mision</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">
                        <a>Vision</a>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Support</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="/contact">
                        <a>Start Here</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">
                        Style guide
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        <a>404 Not Found</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        <a>Password Protected</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        Licenses
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        Changelog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-8">
              <div className="footer-bottom-menu mb-10 wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <a href="#">Buy Template</a>
                  </li>
                  <li>
                    <a href="#">Version 1.2</a>
                  </li>
                  <li>
                    <a href="#">Image Licenses</a>
                  </li>
                  <li>
                    <a href="#">Instructions</a>
                  </li>
                  <li>
                    <a href="#">Visit My Templates</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-4 ">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s ">
                <p>© 2024 Brasper. Reservados todos los derechos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};
export default Footer;

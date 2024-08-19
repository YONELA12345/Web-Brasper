// Importa el array de bancos desde el archivo correspondiente
import databancos from "../src/data/databancos";
// Asegúrate de importar Link desde next/link
import Link from "next/link";

const acerca = () => {
  return (
    <section className="about-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Acerca de la empresa</span>
                  <h2>Conecta tu Mundo, Maximiza tu Valor</h2>
                </div>
                <p>
                En un mundo globalizado y cada vez más conectado, realizar transferencias internacionales
                y cambios de moneda de manera eficiente, segura y con tasas competitivas es esencial para 
                individuos y empresas por igual. En Braper Transferencias, nos especializamos en ofrecer 
                un servicio de cambio de divisas y transferencias internacionales que se destaca por su transparencia, 
                confiabilidad y atención personalizada. Nuestra misión es hacer que cada transacción sea sencilla y libre 
                de preocupaciones, para que puedas enfocarte en lo que realmente importa.
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn mt-15">
                      Ver mas <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Comunicate con nosotros</span>
                      <br />
                      <a href="callto:+51966991933">+51 966991933</a>
                    </div>
                  </div>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/about/icon-about1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                        Tu Mejor Elección en Cambio de Moneda
                        </Link>
                      </h4>
                      <p>
                        Sit amet consectetur adiisc elit sed eiusmod temp diunts
                        ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/about/icon-about2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                        Inversiones Inteligentes, Resultados Garantizados
                        </Link>
                      </h4>
                      <p>
                        Maximiza tus ganancias eligiendo la casa de cambio confiable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="assets/images/acerca/img1.png"
                    alt="About"
                  />
                  <img
                    className="wow zoomIn delay-0-5s"
                    src="assets/images/about/ISOTIPO.png"
                    alt="About"
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="assets/images/acerca/img2.png"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default acerca;

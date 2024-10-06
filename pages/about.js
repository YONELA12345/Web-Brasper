import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Bancos from "@/pages/bancos";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"Nosotros"} />

      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-five1.jpg" alt="About" />
                <img src="assets/images/about/about-five2.jpg" alt="About" />
                <div className="experience-years">
                  <h3>Visión y Misión</h3>
                </div>
                <img
                  className="abut-bg-shape"
                  src="assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">Sobre la empresa </span>
                  <h2>
                    Tu Socio de Confianza para Transferencias Internacionales
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          MISIÓN BRASPER
                        </Link>
                      </h4>
                      <p>
                        Ofrecer el servicio de envío de remesas vía online de
                        Brasil hacia Perú y de Perú a Brasil, con la mayor
                        rapidez, confianza, seguridad y al mejor tipo de cambio,
                        garantizando la calidad de nuestros servicios y
                        desarrollando excelentes relaciones con nuestros
                        clientes locales y regionales.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          VISIÓN BRASPER
                        </Link>
                      </h4>
                      <p>
                        Ser una organización con ventaja competitiva en el envío
                        de remesas a nivel regional que trascienda en el tiempo,
                        a través del desarrollo ético de sus trabajadores y con
                        un enfoque sostenible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="about">
                    Sencillo y seguro
                  </Link>
                </h4>
                <p>
                  Nos destacamos por ofrecer un servicio rápido, seguro y con el
                  mejor tipo de cambio, y la mejor atención solo para ti.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-mission" />
                </div>
                <h4>
                  <Link legacyBehavior href="about">
                    Transferencia Directa
                  </Link>
                </h4>
                <p>
                  Envía dinero de Brasil a Perú y viceversa en minutos, tu
                  dinero llega sin intermediarios y de forma segura.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-mission-1" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Socio de Confianza
                  </Link>
                </h4>
                <p>
                  La confianza es nuestro pilar. Nos comprometemos a ofrecerte
                  un servicio seguro, transparente y eficiente.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics-area-two rel z-2">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">
                      Estadísticas de la empresa
                    </span>
                    <h2>Conozca las estadísticas de nuestra empresa</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="98.9"
                      >
                        <Counter end={98.9} decimals="1" />
                      </span>
                      <span className="counter-title">Clientes felices</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="2.6"
                      >
                        <Counter end={2.6} decimals="1" />
                      </span>
                      <span className="counter-title">Años de experiencia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Trabajadores</span>
            <h2>Equipo de trabajo</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Esperanza Tello</h4>
                <span className="designation">jefa de ventas</span>
                <div className="social-style-two">
                  <a href="https://www.facebook.com/BrasPerTransferencias">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/brasper-transferencias-7a7b7b311/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Carlos Gonzales</h4>
                <span className="designation">Gerente general</span>
                <div className="social-style-two">
                  <a href="https://www.facebook.com/BrasPerTransferencias">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/brasper-transferencias-7a7b7b311/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>Manuel Echeverre</h4>
                <span className="designation">jefe de finanzas</span>
                <div className="social-style-two">
                <a href="https://www.facebook.com/BrasPerTransferencias">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/brasper.transferencias">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/brasper-transferencias-7a7b7b311/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="assets/images/team/team-shape-one.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/team/team-shape-two.png"
            alt="Shape"
          />
        </div>
      </section>
      
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
        </div>
      </section>

      <section className="testimonials-area-two pb-115 rpb-85 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
      <Bancos />
    </Layout>
  );
};
export default About;

import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

const infoSlider = () => {
  const projectSliderActive = {
    
  };
  return (
    <div>
      <section className="project-area overflow-hidden bgc-lighter pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Brasper</span>
            <h2>Transferencias Internacionales</h2>
          </div>
          <Slider {...projectSliderActive} className="project-slider-active">
            <div className="project-slider-item">
              <div className="video">
                <img
                  src="assets/images/about/br2.png"
                  alt="Video"
                />
                <a

                  href="https://www.youtube.com/watch?v=DPR8pZN9OrM"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <div className="content">
                <h4>
                  Tiempo de Transferencia
                </h4>
                <p>
                  Dependiendo del método utilizado, las transferencias de soles a
                  reales pueden tardar desde unas pocas horas hasta varios días hábiles.
                  Las casas de cambio especializadas y plataformas fintech suelen ofrecer
                  tiempos de procesamiento más rápidos en comparación con los bancos tradicionales.
                </p>
                <ul className="list-style-one">
                  <li>Tiempos de Procesamiento Más Rápidos</li>
                  <li>Tasas de Cambio Más Favorables</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    Ver detalles <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="project-slider-item">
              <div className="content">
                <h4>
                  Seguridad
                </h4>
                <p>
                  Es fundamental elegir una entidad que esté regulada por
                  las autoridades financieras pertinentes, tanto en Perú
                  como en Brasil, para asegurar la protección de tus fondos.
                </p>
                <ul className="list-style-one">
                  <li>Seguridad Financiera Garantizada</li>
                  <li>Protección Avanzada de Datos</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    Ver mas <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/shorts/arT3LE9GSvk"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div className="project-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/project-left.png"
            alt="shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div>
      </section>

      <section className="services-area  text-white pt-75 pb-10 rel z-1" style={{ backgroundColor: '#1b1f2e' }}>
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Ultimos servicios</span>
                <h2>Brindamos las mejores cotizaciones en transferencias</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Transferencias
                    </Link>
                  </h4>
                  <p>
                    Una transferencia bancaria es un proceso mediante el cual se mueve dinero de una cuenta bancaria a otra.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cotizaciones
                    </Link>
                  </h4>
                  <p>
                    En el contexto de una casa de cambio o una entidad que se dedica al cambio de divisas,
                    una cotización se refiere al valor o tasa a la cual se puede cambiar una moneda por
                    otra en un momento determinado.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Envios
                    </Link>
                  </h4>
                  <p>
                    Envios rapidos y seguros con Brasper transferencias
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Servicios
                    </Link>
                  </h4>
                  <p>
                    Los servicios que te brindamos no solo son tranferencias seguras,
                    sino que te frindamos asesoramiento y datos curiosos para finanzas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mejoramiento de gastos
                    </Link>
                  </h4>
                  <p>
                    Con nosotros tendras la confianza en mejorar tus trasferencias
                    y te damos un porcentajes de descuento en tu primera transferencia con nosotros
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default infoSlider;

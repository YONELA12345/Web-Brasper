import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import Bancos from "@/pages/bancos";
import Acerca from "@/pages/acerca";
import InfoSlider from "@/pages/infoSlider"
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout header={1}>
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <div className="hero-content pt-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <h1>Brasper transferencias</h1>
                <p>
                  Envíos de Soles, Dólares, y Reales a
                  Brasil y Perú al mejor tipo de cambio y
                  con una tarifa premium para sus envíos!
                </p>
                <Link legacyBehavior href="https://rb.gy/vjpce3" target="_blank">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Invita aqui<i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hero-shapes">
                  <img
                    className="shape one"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape two"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape three"
                    src="assets/images/shapes/plus.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="hero-images mt-80 wow fadeInLeft">
                <img src="assets/images/hero/calculadora.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape bg-lines"
            src="assets/images/shapes/hero-bg-line-shapes.png"
            alt="Shape"
          />
          <img
            className="shape right-shape wow fadeInRight delay-0-8s"
            src="assets/images/shapes/hero-right-shape.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Partners Area start */}
      {/* <section className="partners-area mt-60 pt-150 pb-100 rmt-30 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>World Wide Partners</h2>
          </div>
          <div className="w-full row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center ">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/brasper/bcp.jpeg"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/brasper/interbank.jpeg"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/brasper/bdb.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/brasper/nubank.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/brasper/c6bank.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <Bancos/>
      <Acerca/>


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

      <section className="services-area  text-white pt-75 pb-10 rel z-1" style={{backgroundColor: '#1b1f2e'}}>
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
      
      {/* <InfoSlider/> */}

      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Nuestra pequeña guia</span>
          <h2>Compra o vende tus Reales, soles o dolares en 4 simples pasos</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Cotiza</h4>
                  <p>
                  Cotiza e ingresa el monto que deseas cambiar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Registrate</h4>
                  <p>
                  Regístrate y realiza la transferencia 
                  a la cuenta de BrasPer Transferencias 
                  y envíanos la constancia de la operación.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Recibe tu transferencia</h4>
                  <p>
                    Recibe tu cambio. Te abonaremos el dinero a la cuenta registrada.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Recomienda</h4>
                  <p>
                    Si quedaste satisfecho con nuestro servicio recomiendanos con mas personas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-area-two pb-115 rpb-85 rel z-1">
          <div className="container">
            <TestimonialsSlider />
          </div>
      </section>
    </Layout>
  );
};
export default Index;

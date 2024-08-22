import Link from "next/link";
import { useLocale } from "../context/LocaleContext"; // Asegúrate de importar useLocale

const Acerca = () => {
  const { t } = useLocale(); // Accedemos a las traducciones desde el contexto

  return (
    <section className="about-area pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">
                  {t.aboutSection.subTitle}
                </span>
                <h2>{t.aboutSection.title}</h2>
              </div>
              <p>{t.aboutSection.description}</p>
              <div className="about-btns mb-45">
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15">
                    {t.aboutSection.viewMoreButton}{" "}
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hotline mt-15">
                  <i className="fas fa-phone" />
                  <div className="content">
                    <span>{t.aboutSection.contactUs}</span>
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
                        {t.aboutSection.bestChoice.title}
                      </Link>
                    </h4>
                    <p>{t.aboutSection.bestChoice.description}</p>
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
                        {t.aboutSection.smartInvestments.title}
                      </Link>
                    </h4>
                    <p>{t.aboutSection.smartInvestments.description}</p>
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

export default Acerca;

import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blogs Brasper"} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-standard-inner">
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard1.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="/blog">
                        <a className="tag">Informativo</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        La mejor forma de hacer tranferencias
                      </Link>
                    </h4>
                    <p>
                      Realiza transferencias de forma segura, cómoda y rápida
                      con Brasper
                    </p>
                    <div className="blog-meta-two">
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> Junio 26, 2024
                      </a>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Noticias Nuevas</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog-details">
                            El dolar bajo
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 Julio 2024</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <h4>Haz transferencia segura con Brasper</h4>
                  <Link legacyBehavior href="https://rb.gy/vjpce3">
                    <a
                      className="theme-btn style-two"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contáctanos <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <img src="assets/images/widgets/cta.png" alt="CTA" />
                  <img
                    className="cta-bg-line"
                    src="assets/images/widgets/cta-bg-line.png"
                    alt="CTA bg line"
                  />
                  <img
                    className="cta-bg-dots"
                    src="assets/images/widgets/cta-bg-dots.png"
                    alt="CTA bg Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

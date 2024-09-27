import { testimonialSlider } from "@/src/sliderProps";
import { Fragment, useRef } from "react";
import Slider from "react-slick";
import { useLocale } from "../../../context/LocaleContext"; // Importa el contexto

const TestimonialsSlider = () => {
  const { t } = useLocale(); 
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Fragment>
      <div className="row justify-content-between align-items-end mb-30">
        <div className="col-lg-8">
          <div className="section-title mb-25 wow fadeInRight delay-0-2s">
            <span className="sub-title mb-15">
              {t.testimonialsSection.subTitle}
            </span>
            <h2>{t.testimonialsSection.title}</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="slider-arrow mb-25 text-lg-end">
            <button className="slick-arrow testi-prev" onClick={previous}>
              <i className="far fa-angle-left" />
            </button>
            <button className="slick-arrow testi-next" onClick={next}>
              <i className="far fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
      <Slider
        {...testimonialSlider}
        ref={sliderRef}
        className="testimonial-slider"
      >
        <div className="testimonial-item wow fadeInUp delay-0-2s">
          <div className="image">
            <img
              src="assets/images/testimonials/testi-author1.jpg"
              alt="Author"
            />
          </div>
          <div className="content">
            <div className="testi-header">
              <h4>{t.testimonialsSection.testimonial1.title}</h4>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
            <div className="testi-text">
              {t.testimonialsSection.testimonial1.text}
            </div>
            <div className="testi-footer">
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="title">
                <h4>{t.testimonialsSection.testimonial1.author}</h4>
                <span className="designation">
                  {t.testimonialsSection.testimonial1.designation}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp delay-0-4s">
          <div className="image">
            <img src="assets/images/testimonials/karol.png" alt="Author" />
          </div>
          <div className="content">
            <div className="testi-header">
              <h4>{t.testimonialsSection.testimonial2.title}</h4>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
            <div className="testi-text">
              {t.testimonialsSection.testimonial2.text}
            </div>
            <div className="testi-footer">
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="title">
                <h4>{t.testimonialsSection.testimonial2.author}</h4>
                <span className="designation">
                  {t.testimonialsSection.testimonial2.designation}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp delay-0-4s">
          <div className="image">
            <img src="assets/images/testimonials/karol.png" alt="Author" />
          </div>
          <div className="content">
            <div className="testi-header">
              <h4>{t.testimonialsSection.testimonial2.title}</h4>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
            <div className="testi-text">
              {t.testimonialsSection.testimonial2.text}
            </div>
            <div className="testi-footer">
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="title">
                <h4>{t.testimonialsSection.testimonial2.author}</h4>
                <span className="designation">
                  {t.testimonialsSection.testimonial2.designation}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp delay-0-4s">
          <div className="image">
            <img src="assets/images/testimonials/karol.png" alt="Author" />
          </div>
          <div className="content">
            <div className="testi-header">
              <h4>{t.testimonialsSection.testimonial2.title}</h4>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
            <div className="testi-text">
              {t.testimonialsSection.testimonial2.text}
            </div>
            <div className="testi-footer">
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="title">
                <h4>{t.testimonialsSection.testimonial2.author}</h4>
                <span className="designation">
                  {t.testimonialsSection.testimonial2.designation}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp delay-0-4s">
          <div className="image">
            <img src="assets/images/testimonials/karol.png" alt="Author" />
          </div>
          <div className="content">
            <div className="testi-header">
              <h4>{t.testimonialsSection.testimonial2.title}</h4>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
            <div className="testi-text">
              {t.testimonialsSection.testimonial2.text}
            </div>
            <div className="testi-footer">
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="title">
                <h4>{t.testimonialsSection.testimonial2.author}</h4>
                <span className="designation">
                  {t.testimonialsSection.testimonial2.designation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};

export default TestimonialsSlider;

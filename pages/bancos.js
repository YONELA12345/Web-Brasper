// Importa el array de bancos desde el archivo correspondiente
import databancos from '../src/data/databancos';
// Asegúrate de importar Link desde next/link
import Link from 'next/link';

const bancos = () => {
  return (
    <section className="partners-area mt-60 pt-150 pb-100 rmt-30 rpb-70 rel z-1">
    <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
      <div className="container">
      <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>World Wide Partners</h2>
          </div>
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
          {databancos.map((banco, index) => (
            <div className="col" key={banco.id}>
              <Link legacyBehavior href="/contact">
                <a className={`partner-item-two wow fadeInUp delay-0-${index + 3}s`}>
                  <img
                    src={banco.img1}
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <hr className="mt-45" />
      </div>
    </div>
    </section>
  );
};

export default bancos;

// Importa el array de bancos desde el archivo correspondiente
import databancos from "../src/data/databancos";
// Asegúrate de importar Link desde next/link
import Link from "next/link";

const bancos = () => {
  return (
    <section className="partners-area mt-60 pt-50 pb-30 rmt-30 rpb-70 rel z-1">
      <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
        <div className="container-fluid">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Bancos</span>
            <h2>Medios de transferencia</h2>
          </div>
          <div className="row flex-nowrap justify-content-center">
            {databancos.map((banco, index) => (
              <div className="col" key={banco.id}>
                <Link legacyBehavior href="/contact">
                  <a
                    className={`partner-item-two wow fadeInUp delay-0-${
                      index + 3
                    }s`}
                  >
                    <img className="w-50" src={banco.img1} alt="Partner" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default bancos;

import Navbar from "../components/navbar";
import OffcanvasSidebar from "../components/sidbar";

const Layout = ({ children, header }) => {
  return (
    <>
      <Navbar />

      <section class="pt-0">
        <div class="row">
          <div className="col-xl-6">
            <OffcanvasSidebar />
          </div>
          <div className="col-xl-5">{children}</div>
        </div>
      </section>
    </>
  );
};

export default Layout;

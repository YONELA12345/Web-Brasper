import Navbar from "../components/navbar";
import OffcanvasSidebar from "../components/sidbar";

Navbar;
const Layout = ({ children, header }) => {
  return (
    <>
      <div className="">
        <OffcanvasSidebar />
        <div className="page-content">
          <Navbar />
          <div className="page-content-wrapper border">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

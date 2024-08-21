import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Header1";
import ScrollTopButton from "./ScrollTopButton";
import { useLocale } from "../../context/LocaleContext"; // Usar el contexto de idioma

const Layout = ({ children, header }) => {
  const { locale, changeLocale } = useLocale(); // Usar el contexto de idioma

  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} />
        {/* Selector de idioma global */}
     
        {children}
        <Footer />
        <ScrollTopButton />
      </div>
    </Fragment>
  );
};

export default Layout;

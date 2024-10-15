import { Fragment, useEffect, useState } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Index";
import ScrollTopButton from "./ScrollTopButton";
import { useLocale } from "../../context/LocaleContext";
import ChatBot from "../components/Chatbot/Chatbot";
import Popup from "@/components/Popup";

const Layout = ({ children, header }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Verificar si el popup ya fue cerrado en la sesión actual
    const popupClosed = sessionStorage.getItem("popupClosed");
    if (!popupClosed) {
      setIsPopupOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem("popupClosed", "true"); // Guardar en sessionStorage que el popup fue cerrado
  };

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} />
        {children}
        <Footer />
      </div>
      {/* Render the Popup */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
      <ChatBot />
    </Fragment>
  );
};

export default Layout;

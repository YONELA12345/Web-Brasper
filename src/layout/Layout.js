import { Fragment, useEffect, useState } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Index";
import ScrollTopButton from "./ScrollTopButton";
import { useLocale } from "../../context/LocaleContext"; 
import ChatBot from "../components/Chatbot/Chatbot";
import Popup from "@/components/Popup"

const Layout = ({ children, header }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show the popup automatically when the page loads
    setIsPopupOpen(true);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
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

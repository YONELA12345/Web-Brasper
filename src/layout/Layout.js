import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Index";
import ScrollTopButton from "./ScrollTopButton";
import { useLocale } from "../../context/LocaleContext"; 
import ChatBot from "../components/Chatbot/Chatbot";

const Layout = ({ children, header }) => {
  const { locale, changeLocale } = useLocale(); 

  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment className="border border-danger">
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} />
        {children}
        <Footer />
        {/* <ScrollTopButton /> */}
      </div>
      <ChatBot/>
    </Fragment>
  );
};

export default Layout;

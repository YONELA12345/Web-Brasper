import { LocaleProvider } from "../context/LocaleContext";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import JeenaHead from "@/src/layout/JeenaHead";
import Preloader from "@/src/layout/Preloader";


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <LocaleProvider>
    <Fragment>
      <JeenaHead />
      {loading && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
    </LocaleProvider>
  );
}

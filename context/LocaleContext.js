import { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";
import pt from "../locales/pt.json";

const LocaleContext = createContext();

const translations = { en, es, pt };

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("es"); // Idioma predeterminado
  const [t, setT] = useState(translations[locale]);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") || "es";
    setLocale(storedLocale);
    setT(translations[storedLocale]);
  }, []);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    setT(translations[newLocale]);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

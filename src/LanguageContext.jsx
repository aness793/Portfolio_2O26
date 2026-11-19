import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations" ;

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // localStorage unavailable, fall through
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

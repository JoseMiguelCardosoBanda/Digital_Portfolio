import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export default function LanguageContextProv({ children }) {
  const [lang, setLang] = useState("spanish");
  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const LangHand = () => {
  return useContext(LangContext);
};

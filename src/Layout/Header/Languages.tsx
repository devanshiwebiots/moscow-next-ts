import { LanguagesData } from "@/Data/Layout";
import { languageDataType } from "@/Types/LayoutTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const [open, setopen] = useState(false);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<any>({});
  const [lang, setLang] = useState("EN");
  const [flag, setFlag] = useState("us");

  const changeLanguage = (lng: languageDataType) => {
    setLang(lng.data);
    setFlag(lng.logo);
    i18n.changeLanguage(lng.data);
    setopen(false);
  };

  useEffect(() => {
    const defaultLanguage = LanguagesData.find((data) => data.data == currentLanguage);
    setSelectedLang(defaultLanguage);
    router.refresh();
  }, []);
  const toggle = () => {
    setopen(!open);
  };
  return (
    <li className='language-nav'>
      <div className={`translate_wrapper ${open ? "active" : ""}`} onClick={toggle}>
        <div className='current_lang'>
          <div className='lang'>
            <i className={`flag-icon flag-icon-${flag}`} />
            <span className='lang-txt'>{lang}</span>
          </div>
        </div>
        <div className={`more_lang ${open ? "active" : ""}`}>
          {LanguagesData.map((item, i) => (
            <div className='lang' key={i} data-lng={item.data}>
              <Link href={"#javascript"}
                onClick={() => {
                  changeLanguage(item);
                }}
              >
                <i className={item.logo} />
                <span className='lang-txt'>{item.language}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Languages;

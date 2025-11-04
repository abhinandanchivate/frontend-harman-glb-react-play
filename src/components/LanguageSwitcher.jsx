import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const languages = [
  { code: "en-US", name: "English (US)", flag: "🇺🇸" },
  { code: "ar-AE", name: "العربية", flag: "🇦🇪" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "de-DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "en-XA", name: "Pseudo (QA)", flag: "🔧" },
];

const Button = styled.button`
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1000;
`;

const Option = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#f0f0f0" : "white")};
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = code;
  };

  return (
    <div style={{ position: "relative" }} data-testid="locale-switcher">
      <Button onClick={() => setIsOpen(!isOpen)}>
        <span>{currentLang.flag}</span> {currentLang.name}
      </Button>
      <Menu isOpen={isOpen}>
        {languages.map((lang) => (
          <Option
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            isActive={lang.code === i18n.language}
            data-testid={`locale-option-${lang.code}`}
          >
            <span>{lang.flag}</span> {lang.name}
          </Option>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;

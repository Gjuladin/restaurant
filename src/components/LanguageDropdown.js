import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import i18n from "i18next";

function LanguageSelect() {
  const languages = [
    { code: "mk", name: "Македонски" },
    { code: "sq", name: "Shqip" },
    { code: "en", name: "English" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // set default language

  function handleLanguageChange(language) {
    i18n.changeLanguage(language.code);
    document.title = language.code.toUpperCase(); // Set page title to selected language code
    setSelectedLanguage(language);
  }

  return (
    <DropdownButton variant="dark" title={selectedLanguage.code.toUpperCase()}>
      {languages.map((language) => (
        <Dropdown.Item
          key={language.code}
          eventKey={language.code}
          onClick={() => handleLanguageChange(language)}
        >
          {language.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default LanguageSelect;

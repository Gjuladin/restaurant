import React from "react";
import { useTranslation } from "react-i18next";
import CategoriesTab from "../../components/MenuComponents/CategoriesTab";

const Menu = () => {
  const { t } = useTranslation();
  document.title = `${t("menu")} | Pizza Paradiso`;

  return (
    <div className="background text-white">
      <CategoriesTab />
    </div>
  );
};

export default Menu;

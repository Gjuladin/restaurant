import React from "react";
import { Table } from "react-bootstrap";
import useMenuItems, { useDeleteMenuItem } from "../../../hooks/useMenuItem";
import { FiTrash } from "react-icons/fi";
import useCategories from "../../../hooks/useCategory";
import { useTranslation } from "react-i18next";
const GridTableMenu = () => {
  const { data: menuItemData } = useMenuItems();
  const { data: categories } = useCategories();
  const { t } = useTranslation();
  const { mutate: deleteMenuItem } = useDeleteMenuItem();
  const handleDeleteMenuItem = (id) => {
    deleteMenuItem({ id });
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>{t("Index")}</th>
            <th>{t("MenuItems")}</th>
            <th>{t("Categories")}</th>
            <th>{t("Description")}</th>
            <th>{t("Price")}</th>
            <th>{t("Remove")}</th>
          </tr>
        </thead>
        <tbody>
          {menuItemData &&
            menuItemData?.menuItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  {categories
                    ?.filter((cat) => cat?._id === item?.id_category._id)
                    .map((se) => (
                      <div>{se.category_name}</div>
                    ))}
                </td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <FiTrash
                    onClick={() => {
                      handleDeleteMenuItem(item?._id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GridTableMenu;

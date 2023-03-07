import React from "react";
import { Table } from "react-bootstrap";
import useCategories, { useDeleteCategory } from "../../../hooks/useCategory";
import { FiTrash } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const GridTableCategory = () => {
  const { data } = useCategories();
  const { t } = useTranslation();
  const { mutate: deleteCategory } = useDeleteCategory();
  const handleDeleteCategory = (id) => {
    deleteCategory({ id });
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>{t("Index")}</th>
            <th>{t("Categories")}</th>
            <th>{t("Remove")}</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((categories, index) => (
            <tr key={categories?.id}>
              <td>{index + 1}</td>
              <td>{categories?.category_name}</td>
              <td>
                <FiTrash
                  onClick={() => {
                    handleDeleteCategory(categories?._id);
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

export default GridTableCategory;

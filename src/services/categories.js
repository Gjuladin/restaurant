import api from "./axios";

export const getAllCategories = async () => {
  return api("/categories");
};

export const createCategory = (data) => {
  return api.post("/categories", data);
};

export const deleteCategory = (id) => {
  return api.delete(`/categories/${id}`);
};

export const updateCategory = (id, data) => {
  return api.put(`/categories/${id}`, data);
};

export const findCategories = (id) => {
  return api(`/category/${id}`);
};

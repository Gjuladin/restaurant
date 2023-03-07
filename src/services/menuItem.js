import api from "./axios";

export const getAllMenuItems = async () => {
  return api("/menuItems");
};

export const createMenuItem = (data) => {
  return api.post("/menuItems", data);
};

export const deleteMenuItem = (id) => {
  return api.delete(`/menuItems/${id}`);
};

export const updateMenuItem = (id, data) => {
  return api.put(`/menuItems/${id}`);
};

export const findMenuItem = (id) => {
  return api(`/menuItems/${id}`);
};

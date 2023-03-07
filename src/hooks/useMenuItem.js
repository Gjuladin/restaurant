import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  findMenuItem,
} from "../services/menuItem";

//Hook For Adding Category
export const useAddMenuItem = () => {
  const queryClient = useQueryClient();
  return useMutation(createMenuItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["menuItems"]);
    },
  });
};

//Hook to fetch all categories

export const useMenuItems = () => {
  return useQuery(["menuItems"], getAllMenuItems);
};

//Hook to find single category
export function useFindMenuItems(id) {
  return useQuery(["menuItems", id], () => findMenuItem(id), {
    enabled: !!id,
  });
}

//Hook to Edit or Update category
export function useEditMenuItems() {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }) => updateMenuItem(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["menuItems"]);
    },
  });
}

//Hook to delete category
export function useDeleteMenuItem() {
  const queryClient = useQueryClient();
  return useMutation(({ id }) => deleteMenuItem(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["menuItems"]);
    },
  });
}

export default useMenuItems;

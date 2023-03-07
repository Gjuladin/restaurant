import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategories,
} from "../services/categories";

//Hook For Adding Category
export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

//Hook to fetch all categories

export const useCategories = () => {
  return useQuery(["categories"], getAllCategories);
};

//Hook to find single category
export function useFindCategory(id) {
  return useQuery(["categories", id], () => findCategories(id), {
    enabled: !!id,
  });
}

//Hook to Edit or Update category
export function useEditCategory() {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }) => updateCategory(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
}

//Hook to delete category
export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation(({ id }) => deleteCategory(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
}

export default useCategories;

import { useQuery } from "@tanstack/react-query"
import { Product } from "../types/Product"
import apiClient from "../apiClient"

export const useGetProductsQuery = () =>
    useQuery({
        queryKey: ['products'],
        queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
    })

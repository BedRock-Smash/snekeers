import useSWR from "swr"
import { fetcher } from "../helpers/fetcher.js"
import { axiosInstance } from "../services/instance.js";
import { ApiRoutes } from "../services/constants.js";




export const useProducts = () => {


    const { data: products, error, isLoading } = useSWR(ApiRoutes.PRODUCTS, fetcher)
    const data = products?.length > 0 ? products : [];


    const getProduct = async (id) => {
       return(await axiosInstance.get(`${ApiRoutes.PRODUCTS}/${id}`))
    }
    return {
        data, error, isLoading, getProduct
    }
}
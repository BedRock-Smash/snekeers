import useSWR from "swr"
import { fetcher } from "../helpers/fetcher.js"
import { ApiRoutes } from "../services/constants.js";
import { axiosInstance } from "../services/instance.js";


export const useFavorite = () => {
    const { data: products, mutate, error, isLoading } = useSWR(ApiRoutes.FAVPRODUCTS, fetcher)
    const data = products?.length > 0 ? products : [];
    const isFavorite = (id) => data.some(item => item.productId === id)
    const isFindFavorite = (id) => data.find(item => item.productId === id)


    const addFavProduct = async (product) => {

        if (isFavorite(product.id)) return;
        const { id, title, price, type, img } = product;
        const objProduct = {
            title,
            price,
            type,
            img,
            productId: id,
            count: 1
        }
        await axiosInstance.post(ApiRoutes.FAVPRODUCTS, objProduct)



        mutate([...data, objProduct])
    }

    const removeFavProduct = async (id) => {
        await axiosInstance.delete(`${ApiRoutes.FAVPRODUCTS}/${id}`)
        mutate(data.filter(item => item.productId !== id))
    }
   
  
    return {
        isFindFavorite,
        removeFavProduct,
        addFavProduct,
        isFavorite,
        data,
        error,
        isLoading
    }
}
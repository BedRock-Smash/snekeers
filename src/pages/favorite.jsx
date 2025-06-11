import React from 'react'
import { Favproducts } from '../components/favproducts'
import { Catalog } from '../components/catalog'
import { useFavorite } from '../hooks/favorite'

export const Favorite = () => {

    const {data,error,isLoading} = useFavorite()

    return (
        <>
         <Favproducts />
        <Catalog data = {data} error={error} isLoading= {isLoading}/>
        
        

      
        
        </>
       
    )
}

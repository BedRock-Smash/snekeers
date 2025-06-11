import React from 'react'
import { useParams } from 'react-router'
import { useProducts } from '../hooks/products';
import { Product } from '../components/product';
export const ProductPage = () => {  
    const[product, setProduct] = React.useState({})

    const{id} = useParams();
    const{getProduct} = useProducts()
    React.useEffect(()=>{
      getProduct(id).then(data => setProduct(data));
    },[])
      return (
   <Product {...product} />
  )
}

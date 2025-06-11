import React from 'react'
import styles from "./style.module.css"
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useBasket } from '../../hooks/basket'
import { Link } from 'react-router'
import { useFavorite } from '../../hooks/favorite'



export const Card = (props) => {



  const [loading, setLoading] = React.useState(false);
  const { addProduct, isToBasket } = useBasket()
  const { addFavProduct, } = useFavorite()
  const addToCart = async () => {
    setLoading(true)
    await addProduct(props)
    setLoading(false)
  }
  const addToFav = async () => {
    setLoading(true)
    await addFavProduct(props)
    setLoading(false)
  }
  return (




    <article className={styles.card}>

      {/* <Link className={styles.link} to={`/product/${props.id}`} /> */}
      <div className={styles.img}>
        <Button onClick={addToFav} className={styles.fav}>
          <img src="public/Vector (1).png" alt="" width={20} height={18} />
        </Button>
        <img src={props.img[0]} width="133" height="112" />
      </div>
      <span className={styles.name}>{props.title}</span>
      <div className={styles.button}>
        <span>Цена: <br /> {props.price}₽</span>

        <Button onClick={addToCart}
          disabled={loading}
          className={styles.cartButton}
          variant={isToBasket(props.id) ? "dark" : "light"}>

          {
            isToBasket(props.id) ? "in cart" : <><Plus size={16} /></>
          }




        </Button>

      </div>
    </article>


  )
}

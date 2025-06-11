import React from 'react'
import styles from "./style.module.css"
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import { useBasketIsOpenStore } from '../../store/basket-is-open'
import { useBasket } from '../../hooks/basket' 

export const Basket = () => {
  const { isOpen, setIsOpen } = useBasketIsOpenStore()
  const { totalPrice } = useBasket() 

  return (
    <>
      {isOpen && <div className={styles.overlay}></div>}
      {
        isOpen && <div className={styles.basket}>
  <div className={styles.top}>
    <h2>Корзина</h2>
    <Button onClick={() => setIsOpen(false)} variant="light">
      <X />
    </Button>
  </div>

  <ul className={styles.items}>
    <li>card</li>
    {//more product
    }
  </ul>

  <div className={styles.price}>
    <div className={styles.total}>
      <span>Итого:</span>
      <span>{totalPrice} руб.</span>
    </div>
    <div className={styles.tax}>
      <span>Налог 5%:</span>
      <span>{(totalPrice * 0.05).toFixed(0)} руб.</span>
    </div>
    <button className={styles.checkout}>Оформить заказ</button>
  </div>
</div>
      }
    </>
  )
}

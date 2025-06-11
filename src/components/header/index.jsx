import React from 'react'
import styles from "./style.module.css";
import { Logo } from '../logo';

import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { useBasket } from '../../hooks/basket';
import { Button } from '../ui/button';
import { useBasketIsOpenStore } from '../../store/basket-is-open';
export const Header = () => {
  const { totalCount, totalPrice } = useBasket()
  const {setIsOpen} = useBasketIsOpenStore()
  return (
    <>
      <header className={styles.header}>

        <Logo />
        <div className={styles.headerLinks}>
          <Button onClick={() => setIsOpen(true)}>
            <div className={styles.basket}>
              <span>{totalPrice}₽</span>
            </div>
          </Button>

          <Link to="/favorite">
            <div className={styles.favorite}>
              <img src="public/zmdi_favorite-outline.svg" alt="" />
              <span>Закладки</span>
            </div>
          </Link>

          <Link to="/profill">
            <div className={styles.profil}>
              <img src="public/Union.svg" alt="" />
              <span>Профиль</span>
            </div>
          </Link>
        </div>
      </header>

    </>
  )
}
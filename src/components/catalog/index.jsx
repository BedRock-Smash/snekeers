import React from 'react'
import styles from "./style.module.css"
import { Card } from '../card'
import { Search } from '../search'
import { useSearchStore } from '../../store/search'


export const Catalog = (props) => {
  
  const activeSearch = useSearchStore(state => state.activeSearch)
  if (props.error) {
    return <h1>{props.error.message}</h1>
  }
  if (props.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className={styles.catalogTopBar}>

        <h1 className={styles.title}>Все кроссовки</h1>

        <Search />

      </div>
      <ul className={styles.list}>
        {
          props.data
            .filter(el => el.title.toLowerCase().includes(activeSearch.toLowerCase()))

            .map(item => (
              <li key={item.id}>

                <Card {...item} />

              </li>
            ))
        }
      </ul>
    </>
  )

}

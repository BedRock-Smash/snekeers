import React from 'react'

import styles from "./style.module.css"
import { SearchIcon } from 'lucide-react'
import { useSearchStore } from '../../store/search'
export const Search = () => {
    const { activeSearch, setActiveSearch } = useSearchStore()
    return (
        <label className={styles.label} >
            <SearchIcon />
            <input className={styles.input} onChange={(e) => setActiveSearch(e.target.value)} value={activeSearch} type="text" placeholder={"Поиск..."} />
        </label>
    )
}

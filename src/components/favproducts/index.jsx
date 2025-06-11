import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
import React from 'react'
import styles from "./style.module.css"
import { useNavigate } from 'react-router'
export const Favproducts = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.favheader} >
                <div className={styles.favarrow} onClick={() => navigate(-1)}><ArrowLeft width={20} height={20} /></div>
                <h1>Мои Закладки</h1>
            </div >
        </>
    )
}

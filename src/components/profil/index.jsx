import { ArrowLeft } from 'lucide-react'
import React from 'react'
import styles from "./style.module.css"
import { useNavigate } from 'react-router';

export const Profil = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.profheader} >
                <div className={styles.profarrow} onClick={() => navigate(-1)}><ArrowLeft width={20} height={20} /></div>
                <h1>Мои Покупки</h1>
            </div >
        </>
    )
}


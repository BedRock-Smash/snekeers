import React from "react";
import Styles from "./style.module.css"
import { Link } from "react-router";


export const Logo = () => {
return (
<Link to="/" >
<div className={Styles.logo}>
    <img className={Styles.img} src="public/image 4.png" width="45" height="45" />
    <b className={Styles.b}>REACT SNEAKERS</b>
    <strong className={Styles.strong}>Магазин лучших кроссовок</strong>
    </div>
</Link>
);
}
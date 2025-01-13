import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Whats Hot</h2>
            <h3 className={styles.title}>Most Popular</h3>
            <MenuPosts withImage={true} />
            <MenuPosts withImage={false} />
        </div>
    );
};

export default Menu;

import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>CULTURE</span>
                        <span className={styles.date}>11.02.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>CULTURE</span>
                        <span className={styles.date}>11.02.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>CULTURE</span>
                        <span className={styles.date}>11.02.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>CULTURE</span>
                        <span className={styles.date}>11.02.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPosts;

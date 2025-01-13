import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Whats Hot</h2>
            <h3 className={styles.title}>Most Popular</h3>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            fill
                        />
                    </div>
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
        </div>
    );
};

export default Menu;

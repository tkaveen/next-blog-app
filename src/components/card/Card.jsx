import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" className={styles.image} alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h3>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                    impedit corporis aperiam perferendis neque ullam blanditiis
                    sapiente et necessitatibus qui corrupti, perspiciatis vel,
                    sequi earum maxime cum ratione atque aspernatur?
                </p>
                <Link className={styles.link} href="/">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Super Dev Here!</b> Discover my stories and creative
                ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/p1.jpeg"
                        className={styles.image}
                        alt=""
                        fill
                    />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quaerat, iusto placeat.
                    </h2>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Odio aspernatur nulla neque quos doloribus tenetur
                        totam velit non ad quibusdam obcaecati atque hic iure,
                        accusantium nobis aliquam impedit autem delectus!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

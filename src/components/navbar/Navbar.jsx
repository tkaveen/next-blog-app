import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.social}>
                <Image src="./fb.png" alt='fb' width={24} height={24} />
            </div> */}
            <div className={styles.logo}>Kevin Linro</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks />
            </div>
        </div>
    );
};

export default Navbar;

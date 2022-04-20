import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <a className={styles.logoInit}>
            <Image
              src={"/image/logoMajorKey.svg"}
              alt={"Logo MajorKey"}
              width={190}
              height={40}
            />
          </a>
        </Link>

        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link href={"https://www.linkedin.com/in/nicoschonfeld/"}>
                <a target={"_blank"} className={styles.menuIcon}>
                  <FaLinkedin />
                </a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link
                href={"https://github.com/NicoSchonfeld/majorkey-challenge"}
              >
                <a target={"_blank"} className={styles.menuIcon}>
                  <FaGithub />
                </a>
              </Link>
            </li>

            <Link href={"https://www.majorkeytech.com/about-us/about-us/"}>
              <a target={"_blank"} className={styles.btnWeb}>
                ¡Our Web!
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

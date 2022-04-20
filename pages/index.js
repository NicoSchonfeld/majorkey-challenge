import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <main className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.textHome}>
            <h1 className={styles.title}>
              Your best tool <br /> MajorKey
            </h1>
            <Link href={"/PageApp"}>
              <a className={styles.startApp}>Start App</a>
            </Link>
          </div>

          <img
            className={styles.logoImage}
            src={"/image/M.svg"}
            alt={"Logo"}
            width={400}
            height={400}
          />
        </div>

        <div className={styles.bg}></div>
      </main>
    </Layout>
  );
}

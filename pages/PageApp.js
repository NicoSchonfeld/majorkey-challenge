import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { DataContext } from "../context/DataProvider";
import Image from "next/image";
import styles from "../styles/App.module.css";

export default function PageApp() {
  const {
    items,
    deleteTask,
    modal,
    setModal,
    handleSubmit,
    textInput,
    setTextInput,
  } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.sectionLoading}>
          <Image
            src={"/image/logoMajorKey2.svg"}
            alt={"logo 2 majorKey"}
            width={200}
            height={50}
          />
          <h3 className={styles.textLoading}>
            We are preparing your tool<span>.</span>
            <span>.</span>
            <span>.</span>
          </h3>
        </div>
      ) : (
        <Layout>
          {Boolean(modal) && (
            <div className={styles.sectionModal}>
              <form onSubmit={handleSubmit} className={styles.containerModal}>
                <h3 className={styles.titleModal}>Add item</h3>
                <input
                  className={styles.input}
                  autoFocus
                  type={"text"}
                  onChange={(e) => setTextInput(e.target.value)}
                  value={textInput}
                />
                <div className={styles.containerBtn}>
                  <button
                    className={styles.btnClose}
                    onClick={() => {
                      setTextInput("");
                      setModal(!modal);
                    }}
                  >
                    Close
                  </button>
                  <button className={styles.btnAdd} type={"submit"}>
                    Add
                  </button>
                </div>
              </form>
            </div>
          )}

          <section className={styles.section}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>Supermarket list</h2>
              <p className={styles.itemsLength}>{items.length} item(s)</p>

              {items.length ? (
                <div className={styles.maxItems}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.containerItems}>
                      <p>{item.text}</p>
                      <button
                        className={styles.btnDelete}
                        onClick={() => deleteTask(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}

              <button
                className={styles.btnAddItems}
                onClick={() => setModal(!modal)}
              >
                Add items
              </button>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}

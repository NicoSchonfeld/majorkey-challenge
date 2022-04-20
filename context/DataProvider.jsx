import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

const initialData = [{ id: 1, text: "Buy bread" }];

export default function DataProvider({ children }) {
  const [items, setItems] = useState(initialData);
  const [modal, setModal] = useState(false);
  const [textInput, setTextInput] = useState("");

  const deleteTask = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    textInput
      ? setItems(items.concat({ id: +new Date(), text: textInput }))
      : null;

    setTextInput("");
    setModal(!modal);
  };

  return (
    <DataContext.Provider
      value={{
        items,
        setItems,
        deleteTask,
        modal,
        setModal,
        handleSubmit,
        textInput,
        setTextInput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

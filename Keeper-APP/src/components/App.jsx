import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newItem, setItem] = useState([]);
  function addItem(newEvent) {
    setItem((preVal) => {
      return [...preVal, newEvent];
    });
  }
  function deleteItem(id) {
    setItem((preVal) => {
      return preVal.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {newItem.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onClicked={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

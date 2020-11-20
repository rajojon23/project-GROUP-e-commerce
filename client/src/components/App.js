import React, { useState, useEffect } from "react";

import Cart from "./Cart/Cart";

function App() {
  const [bacon, setBacon] = useState(null);
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);

  if (sellers) {
    const soldBy = sellers.find((seller) => Number(seller._id) === 19962);
    console.log(soldBy);
  }

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));

    fetch("/allitems")
      .then((res) => res.json())
      .then((data) => setItems([...data.data]));

    fetch("/companies")
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  }, []);

  return (
    <div>
      {bacon ? bacon : `...where's my stuff?...`}

      {items &&
        sellers &&
        items.map((item) => {
          return (
            <p key={item.id}>
              {item.name} - SOLD by
              <b></b>
            </p>
          );
        })}
    </div>
  );
}

export default App;

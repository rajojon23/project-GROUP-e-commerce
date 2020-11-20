import React, { useState, useEffect } from 'react';

import Cart from "./Cart/Cart";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return <div>

    <Cart />

  </div>;
}



export default App;

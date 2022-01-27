import React, { useEffect, useState } from "react";
import AddressList from "./components/AddressList";

const App = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/address")
      .then((res) => res.json())
      .then((data) => {
        setAddress(data);
      });
  }, []);

  return <AddressList address={address}></AddressList>;
};

export default App;

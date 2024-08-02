import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";


function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const PrevpriceRef = useRef(price)

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const Prevprice = PrevpriceRef.current;
    if (price > Prevprice) {
      setColor("green");
      } else if (price < Prevprice) {
        setColor("red");
        } else {
          setColor("black");
          }
          PrevpriceRef.current = price;
          }, [price]);
          
  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;

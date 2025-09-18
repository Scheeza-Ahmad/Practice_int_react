import React, { useState } from "react";

const Card = (props) => {
  const [quantity, setquantity] = useState(props.quantity || 0);
  //yahan pa humna aik quantity ko set karna tha isi liya hum na const use kiya hai void tab use hota hai jab uch bhi return na aran ho

  const handlequantity = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    } else {
      alert("Product is not available");
    }
  };
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "2px solid black",
        margin: "30px",
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Quantity: {quantity}</p>
      {/* yeh quantity ko current value hai jo change ho sati hai aur agar ain yahan pa props.quantity lihti to woh woh initial value hoti  */}
      <button onClick={handlequantity}>Buy Now</button>
    </div>
  );
};

export default Card;

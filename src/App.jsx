// Props, UseState, Components, UseEffect,condition rendering,routers,navlinks and links complete,List rendering,useMemo


// React ek JavaScript library hai, framework nahi
// React actually hota hai HTML ke andar JavaScript likhna
// Vite ek building tool aur development server hai jo modern web projects ke liye design kiya gaya hai
// Agar string ko likhna hai to inverted commas use karo, agar numbers likhna hai to {} yeh wali brackets use karo
// Agar inline css likhni hai to phir style={{}} ismein likhna hai
//Agar koi variable banana hai to return ka andar aur agar koi function hai ya phir hooks hain to return ka bahir
//Agar hum ternary operator use kar raha hain to wahan hum style ka tag daramayn main nhi likh sakta isi liya class ka naam dai do wahan aur phir usa style kar do apna index.css main

import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Card from "./components/Card";
import Followers from "./components/Followers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarbylink from "./components/Navbarbylink";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbarusingnavlink from "./components/Navbarusingnavlink";

function App() {
  const [count, setCount] = useState(0);

  // // Yeh har re-render par chalega
  // useEffect(() => {
  //   alert("I will be available on every re-render");
  // });

  // Yeh specific condition par chalega
  useEffect(() => {
    if (count === 2) {
      alert("I will be rendered only when count=2");
    }
  }, [count]); // count change hone par yeh effect chalega
  //yahan directly main condition main nhi likh sakti ka count===2
  const [mode, setMode] = useState(true);
  //yahan hum list banain ga list rendering ka liya
  const names = ["scheeza", "alishba", "fatima"];
  const [number, setNumber] = useState(5);

  //yahan hum usememo hook ko samjhain ga
  //   Jab bhi React component re-render hota hai to uske andar ka sara code dobara run hota hai.
  // Agar tumhare paas koi heavy / expensive calculation hai (jaise badi list filter karna, sorting, ya koi complex formula), to woh har render pe dobara run hoga → app slow ho sakti hai.
  // useMemo is problem ko solve karta hai. Ye calculation ka result cache kar leta hai aur dobara tabhi calculate karta hai jab dependency array wali values change hoti hain.
  //useMemo ka use hota hai values aur results ka liya 

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");

    // Factorial calculation function
    const calculateFactorial = (n) => {
      if (n < 0) {
        alert("Number cannot be negative");
        return 0;
      }

      if (n === 0 || n === 1) {
        return 1;
      }

      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };

    return calculateFactorial(number);
  }, [number]);

  const [item, setitem] = useState([
    { name: "laptop", price: 20000 },
    { name: "mobile", price: 2000 },
    { name: "charger", price: 200 },
    { name: "fan", price: 20 },
  ]);
  const totalprice = useMemo(() => {
    console.log("Calculating total price...");
    return item.reduce((sum, currentItem) => sum + currentItem.price, 0);
  }, [item]);

  return (
    <>
      {/* Iss div mein hum parh rahe hain props */}
      <div className="card">
        <Card title="Bag" description="it is a bag" quantity={10} />
        <Card title="Shoes" description="it is a shoes" quantity={5} />
        <Card title="Watch" description="it is a watch" quantity={3} />
        <Card title="Book" description="it is a book" quantity={8} />
        <Card title="Phone" description="it is a phone" quantity={2} />
      </div>

      {/* Iss div main hum usestate aur useeffect ka concept parh raha hai  */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>UseEffect Test</button>
      </div>

      {/* Iss div main hum sirf condition rendering parhain ga  */}
      <div className={mode ? "light-theme" : "dark-theme"}>
        <p>Mode :{mode ? "Light" : "Dark"}</p>
        {mode && <button>Hey light mode</button>}
        {/* && hum tab use ar sakta hai agar hum na sirf true ki baat karni ho agar hum na false ki baat bhi karni hai to phir hum ternery operator ka use arain ga  */}
        <button onClick={() => setMode(!mode)}>Mode</button>
        {/*increase users mini-assignment */}
        <Followers fol={10} />
      </div>

      {/* iss div main hum sirf routers waghaira daikhain ga  */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbarbylink />}> */}
          <Route path="/" element={<Navbarusingnavlink />}>
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* iss div main hum list rendering parhain ga  */}
      <div>
        <h2>Names list</h2>
        <ul>
          {names.map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
      </div>

      {/* iss div main hum usememo hook ko parhain ga  */}
      <div>
        <p>
          The factorial of the {number} is : {factorial}
        </p>
        <button onClick={() => setNumber(number + 1)}>factorial</button>
        <ul>
          {item.map((items, index) => {
            return (
              <li key={index}>
                {items.name}
                {items.price}
              </li>
            );
          })}
        </ul>
        <p>The total bill is : {totalprice}</p>
      </div>
    </>
  );
}

export default App;

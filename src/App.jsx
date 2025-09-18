// Props, UseState, Components, UseEffect,condition rendering,routers,navlinks and links complete

// React ek JavaScript library hai, framework nahi
// React actually hota hai HTML ke andar JavaScript likhna
// Vite ek building tool aur development server hai jo modern web projects ke liye design kiya gaya hai
// Agar string ko likhna hai to inverted commas use karo, agar numbers likhna hai to {} yeh wali brackets use karo
// Agar inline css likhni hai to phir style={{}} ismein likhna hai
//Agar koi variable banana hai to return ka andar aur agar koi function hai ya phir hooks hain to return ka bahir
//Agar hum ternary operator use kar raha hain to wahan hum style ka tag daramayn main nhi likh sakta isi liya class ka naam dai do wahan aur phir usa style kar do apna index.css main

import { useState, useEffect } from "react";
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
    </>
  );
}

export default App;

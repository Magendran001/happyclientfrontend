
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import Card from "./components/body/card";


export default function App() {
  let [searchquery, setsearchquery] = useState("");

  return (
    <div className="App">
      <Navbar setsearchquery={setsearchquery} />
      <Card searchquery={searchquery} />
    </div>
  );
}

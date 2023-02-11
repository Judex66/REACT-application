import React, { FunctionComponent, useState } from "react";
import { Erro } from "./components/erro";
import { Header } from "./components/header";
import { Route, Routes } from "react-router-dom";
import { CardField } from "./components/cardsField";
import { About } from "./components/about";
import { Froms } from "./components/forms";
import { CardFieldAPI } from "./components/cardFieldAPI";
import { CardFieldHook } from "./components/cardFieldAPIHooks";
import { Form } from "./components/creat-form";
import { FullInfoWindow } from "./components/fullInfowindow";
interface Data {
  flags: Flags;
  name: Name;
  key: number;
  i: null;
  population: string;
}

interface Name {
  common: string;
  official: string;
}
interface Flags {
  png: string;
}

function App() {
  const [fulldata, setFulldata] = useState(Array<Data>());
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Erro />} />
        <Route path="/Cards" element={<CardFieldHook />} />
        <Route path="/about" element={<About />} />
        <Route path="/creatForm" element={<Form />} />
        <Route path="/datafull" element={<FullInfoWindow />} />
      </Routes>
    </div>
  );
}

export default App;

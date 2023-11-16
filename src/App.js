import "./App.css";
import { Acasa } from "./Acasa";
import { AboutState2 } from "./AboutState2";
import { AboutState } from "./AboutState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Monkeys } from "./Monkeys";
import { Monkey } from "./Monkey";
import { useState } from "react";
import { createContext } from "react";
import Form32 from "./Form32";
export const AppContext = createContext();

// import { CalculatorState } from "./components/Calculator";

function App() {
  const arr = [
    { name: "Azorel", age: "3", id: 1, friendly: true },
    { name: "Suzie", age: "8", id: 2, friendly: false },
    { name: "Thor", age: "1", id: 3, friendly: true },
  ];
  const monkeysArr = [
    { name: "Cita", age: "3", id: 1, friendly: true },
    { name: "Periuta", age: "8", id: 2, friendly: false },
    { name: "King Kong", age: "1", id: 3, friendly: true },
  ];

  const [monkeyName, setMonkeyName] = useState();

  return (
    <div className="App">
      <AppContext.Provider value={{ monkeyName, setMonkeyName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Acasa />} />;
            <Route path="aboutstate" element={<AboutState />} />;
            <Route path="monkeys" element={<Monkeys />} />;
            <Route path="form32" element={<Form32 />} />
            <Route
              path="monkeys/:id"
              element={<Monkey monkeysArr={monkeysArr} />}
            />
            ;
            <Route path="aboutstate2" element={<AboutState2 array={arr} />} />;
            <Route path="*" element={<p>THIS PAGE IS NOT AVAILABLE</p>} />;
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

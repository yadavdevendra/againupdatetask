import { useMemo, useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ShowDataInTable from "./components/ShowDataInTable";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <input
        type="number"
        placeholder="0"
        onChange={(e) =>setCount(e.target.value)}
      />
      <ComponentA count={count} />
      <ComponentB count={count} />
      <ComponentC count={count} />
      <ShowDataInTable />
    </div>
  );
}

export default App;

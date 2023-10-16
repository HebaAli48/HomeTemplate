import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import { CollapsedContext } from "./utils/MenuContext";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(null);

  return (
    <>
      <CollapsedContext.Provider value={{ isCollapsed, setIsCollapsed }}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </CollapsedContext.Provider>
    </>
  );
}

export default App;

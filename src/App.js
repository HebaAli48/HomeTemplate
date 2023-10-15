import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import { CollapsedContext } from "./utils/MenuContext";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(null);
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <CollapsedContext.Provider
        value={{ isCollapsed, setIsCollapsed, isShown, setIsShown }}
      >
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

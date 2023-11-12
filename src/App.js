import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import { CollapsedContext } from "./utils/MenuContext";
import { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(null);

  return (
    <>
      <CollapsedContext.Provider value={{ isCollapsed, setIsCollapsed }}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </CollapsedContext.Provider>
    </>
  );
}

export default App;

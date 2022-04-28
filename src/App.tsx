import React from "react";
import { MainFooter } from "./components/MainFooter";
import { MainHeader } from "./components/MainHeader";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Home />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;

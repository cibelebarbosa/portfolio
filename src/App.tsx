import { useState } from "react";
import { AppBarCustom } from "./components/custom/appbarcustom";
import FooterCustom from "./components/custom/footercustom";
import About from "./pages/about";
import Home from "./pages/home";

export function App() {
  const [menuItem, setMenuItem] = useState<number>(1);
  return (
    <>
      <header>
        <AppBarCustom setMenuItem={setMenuItem} />
      </header>
      <div className="flex flex-col h-screen justify-between">
        <main>
          {menuItem === 1 ? (
            <Home setMenuItem={setMenuItem} />
          ) : menuItem === 2 ? (
            <About />
          ) : menuItem === 3 ? (
            <></>
          ) : (
            <></>
          )}
        </main>
        <footer>
          <FooterCustom />
        </footer>
      </div>
    </>
  );
}

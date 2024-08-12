import { useState } from "react";
import { AppBarCustom } from "./components/custom/appbarcustom";
import FooterCustom from "./components/custom/footercustom";
import About from "./pages/about";
import Home from "./pages/home";
import { Contact } from "./pages/contact";
import Maintenance from "./pages/maintenance";


export function App() {
  const [menuItem, setMenuItem] = useState<number>(1);
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
      <header>
        <AppBarCustom setMenuItem={setMenuItem} />
      </header>
        <main className="flex-grow">
          {menuItem === 1 ? (
            <Home setMenuItem={setMenuItem} />
          ) : menuItem === 2 ? (
            <About />
          ) : menuItem === 3 ? (
            <Maintenance></Maintenance>
          ) : (
            <Contact></Contact>
          )}
        </main>
        <footer>
          <FooterCustom />
        </footer>
      </div>
    </>
  );
}

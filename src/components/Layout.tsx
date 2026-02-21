import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export type SiteMode = "entreprise" | "visiteur";

const Layout = () => {
  const [mode, setMode] = useState<SiteMode>("entreprise");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar mode={mode} onModeChange={setMode} />
      <main className="flex-1 pt-16">
        <Outlet context={{ mode }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

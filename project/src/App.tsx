import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Industries } from "./components/Industries";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Industries />
        <Blog />
        <Contact />
      </div>
    </AuthProvider>
  );
}

export default App;

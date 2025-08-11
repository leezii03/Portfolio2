import { useState } from "react";
import Navbar from "./layouts/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-gray-100 scroll-smooth">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;

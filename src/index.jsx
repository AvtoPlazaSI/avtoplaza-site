import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#0086d1] text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Avto PLAZA</h1>
          <p className="italic text-sm">Za volanom zaupanja</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Izbrani avtomobili. Brez skrbi.</h2>
          <p className="text-lg mb-6">
            V Avto PLAZA ponujamo preverjena rabljena vozila do 5 let starosti in do 150.000 km.
          </p>
          <a href="#ponudba" className="bg-[#0086d1] hover:bg-blue-700 text-white py-2 px-6 rounded-xl transition">Oglej si ponudbo</a>
        </div>
        <img src="/avto.jpg" alt="Avto" className="rounded-2xl shadow-xl" />
      </section>

      <footer className="bg-[#333] text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h5 className="text-xl font-bold mb-2">Kontakt</h5>
          <p>Gregor Čorokalo</p>
          <p>Tel: +386 41 XXX XXX</p>
          <p>Email: info@avtoplaza.si</p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
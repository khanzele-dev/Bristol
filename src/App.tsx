import Header from "./components/Header";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routers } from "./config";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route path={el.path} key={el.path} element={el.component} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

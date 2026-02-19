import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { routers } from "./config";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className='app__content'>
        <Routes>
          {routers.map((el) => (
            <Route path={el.path} key={el.path} element={el.component} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

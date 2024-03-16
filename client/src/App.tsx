import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import router from "./routes/root.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <div id="App">
      <NavBar />
      <Routes>
        {router.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

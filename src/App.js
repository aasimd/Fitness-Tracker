import { NavBar } from "./components/NavBar/NavBar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ExercisePage } from "./pages/ExercisePage/ExercisePage";
import { FoodsPage } from "./pages/FoodsPage/FoodsPage";
import { GoalsPage } from "./pages/GoalsPage/GoalsPage";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<ExercisePage />} />
        <Route path="/foods" element={<FoodsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
      </Routes>
    </div>
  );
}

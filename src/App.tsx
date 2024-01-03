import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MonthStatictics from "./pages/monthStatictics/MonthStatictics";
import Header from "./shared/Header/Header";
import "./styles/index.scss"

function App() {

  return (
    <div className="global_container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/month_statictics" element={<MonthStatictics />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

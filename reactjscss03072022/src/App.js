import './Styles/BookOfStyles.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import SectionSaturday from "./Pages/SectionSaturday";
import SectionSunday from "./Pages/SectionSunday";

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="toSaturdaySection" element={<SectionSaturday />} />  
            <Route path="toSundaySection" element={<SectionSunday />} />  
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;

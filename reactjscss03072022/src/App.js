import './Styles/BookOfStyles.css';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import SectionSaturday from "./Pages/SectionSaturday";
import SectionSunday from "./Pages/SectionSunday";

function App() {
  return (
    <>
    <div>
        <Routes>
          <Route path="/reactjscss03072022" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/reactjscss03072022/toSaturdaySection" element={<SectionSaturday />} />  
            <Route path="/reactjscss03072022/toSundaySection" element={<SectionSunday />} />  
          </Route>
        </Routes>
    </div>
    </>
  );
}

export default App;

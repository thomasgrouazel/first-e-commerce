import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/:HomepageId" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

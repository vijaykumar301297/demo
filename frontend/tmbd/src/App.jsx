import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout"; // Make sure this component is properly imported

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate replace to='/movie' />} />
                <Route path='/movie' element={<AppLayout />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;

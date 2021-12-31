import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from "./AppLayout";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={
                    <Navigate replace to="/1/1" />
                }/>
                <Route path="/:main/:sub" element={<AppLayout/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Details from "../routes/Details";
import Home from "../routes/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:id" element={<Details />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
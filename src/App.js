import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFoundPage from "./components/NotFound";
import { GlobalStyle } from "./GlobalStyles";
import Room from "./subProject/Room";
// Rounting

function App() {
    return (
        <div className="App">
            {/* <Room/> */}
            <Router>
                <GlobalStyle />
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:movieId" element={<Movie />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

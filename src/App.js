import Navbar from './Navbar';
import Home from './Home';
import Review from './Review';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {

    return (
        <Router basename="/iconicque">
            <div className="App">
                <Navbar />
                <div className="content router">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/review/:id" element={<Review />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

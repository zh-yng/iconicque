import Navbar from './Navbar';
import Home from './Home';
import Review from './Review';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

/*

TO TEST:
- Local Host: npm start
- JSON Server: npx json-server --watch data/db.json --port 8000

*/

function App() {

    return (
        <Router>
            <div className="App router">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/review/:id" element={<Review />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

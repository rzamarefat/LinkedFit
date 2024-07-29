import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Provider } from 'react-redux'
import Store from './redux/store'

import JobSearch from "./pages/JobSearch"
import Resume from "./pages/Resume"
import Jobs from "./pages/Jobs"


const App = () => {
    return (
        <Provider store={Store}>
            <Router>
                <Routes>
                    <Route path="/" element={<JobSearch />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Router>
        </Provider>
        
        
    )
}


export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Checkbox from './Checkbox';
import Home from './Home';

function App() {
  return (
    <Router>
        
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/checkbox' element={<Checkbox/>}/>
            </Routes>
        
    </Router>
  )
}

export default App
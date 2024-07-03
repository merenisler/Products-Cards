import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllCard from '../pages/AllCard';
import Card from '../pages/Card';
import Detail from '../pages/Detail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Card />}/>
          <Route path='/AllCard' element={<AllCard />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/AllCard/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skill from 'Skill';
import Contact from 'Contact';
import Home from 'Home';
import Tab from 'Tab';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

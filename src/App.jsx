import { Outlet } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Middle from './components/Middle/Middle';
import NavBar from './components/Navbar/NavBar';
import Services from './components/Services/Services';
import Testimonial from './components/TestiMonial/TestiMonial';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

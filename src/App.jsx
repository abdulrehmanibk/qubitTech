import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import ScrollToTop from './Components/TopScroll';
import Home from './Screens/Home/Home';
import { NavIconProvider } from './Context/NavIcon';
import ContactPage from './Screens/Contact/Contact';
import Insights from './Screens/Insights/Insights';


function App() {
  return (
    <>
    <NavIconProvider>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactPage />} />
        <Route path="/latest-news" element={<Insights />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </NavIconProvider>
    </>
  )
}

export default App;

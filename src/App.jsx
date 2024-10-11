import { Routes, Route, Link, Navigate } from 'react-router-dom'; // Import Navigate
import Nav from "./components/Nav";
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        {/* Redirect from '/' to '/home' */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;

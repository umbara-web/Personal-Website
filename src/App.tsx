import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import HeroSection from './components/hero-section';
import AboutMe from '@/components/about-me';
import Skills from './components/skills';
import Exprience from './components/experience';
import Portfolio from './components/portfolio';
import { portfolioItems } from './data/data';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import FooterSection from './components/footer';

function App() {
  return (
    <div className='font-quicksand'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Exprience />} />
          <Route
            path='/portfolio'
            element={<Portfolio slides={portfolioItems} />}
          />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;

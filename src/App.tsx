import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import VideoPortfolio from '@/components/VideoPortfolio';
import Gallery from '@/components/Gallery';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <VideoPortfolio />
        <Gallery />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

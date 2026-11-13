import Navbar from '@/components/Navbar';
import HomeServices from '@/components/HomeServices';
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
        <HomeServices />
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

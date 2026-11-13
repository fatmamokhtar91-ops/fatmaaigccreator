import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceCatalog from '@/components/ServiceCatalog';
import Services from '@/components/Services';

// One connected home-page module: hero, about, service catalog and detailed services.
export default function HomeServices() {
  return (
    <>
      <Hero />
      <About />
      <ServiceCatalog />
      <Services />
    </>
  );
}

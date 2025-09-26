import BannerOne from '@/components/sections/Banner-one';
import dynamic from 'next/dynamic';
// Dynamically import the components
const Navbar = dynamic(() => import("@/components/layouts/Navbar"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));
const About = dynamic(() => import("@/components/sections/About"));
const App = dynamic(() => import("@/components/sections/Gallary"));
const Links = dynamic(() => import("@/components/sections/Links"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Testimonial = dynamic(() => import("@/components/sections/Testimonial"));

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerOne />
      <About />
      <Testimonial />
      <App />
      <Links />
      <Services />
      <Footer />
    </>
  );
}

import Hero from '@/components/sections/Hero';
import ProofBar from '@/components/sections/ProofBar';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Agents from '@/components/sections/Agents';
import Industries from '@/components/sections/Industries';
import CaseStudies from '@/components/sections/CaseStudies';
import Pricing from '@/components/sections/Pricing';
import Booking from '@/components/sections/Booking';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <Problem />
      <Solution />
      <Agents />
      <Industries />
      <CaseStudies />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  );
}

import concertsData from '../data/concerts';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Grid from '@/components/Grid';
import Family from '@/components/Family';
import Disco from '@/components/Disco';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Grid/>
      <Disco/>
      <Family />
      <Contact/>
    </>
  );
}

import Hero from '@/components/Hero';
import About from '@/components/About';
import Grid from '@/components/Grid';
import Family from '@/components/Family';
import Disco from '@/components/Disco';
import Contact from '@/components/contact/Contact';
import NextConcert from '@/components/NextConcert';
export default function Home() {
  return (
    <>
      <Hero/>
      <NextConcert/>
      <About/>
      <Disco/>
      <Family />
      <Grid/>
      <Contact/>
    </>
  );
}

import { SEO } from '../components/SEO';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Accordion from '../components/Accordion';
import Team from '../components/Team';
import About from '../components/About';


export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <Header />
      <Main />
      <About />
      <Accordion />
      <Team />
      <Footer />
    </>
  );
}

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import AboutMe from '@/components/AboutMe';

export const metadata: Metadata = {
  title: 'About - Gufronnaka Arif Wildan',
};

function Me() {
  return (
    <>
      <Container>
        <AboutMe />
      </Container>
      <Footer />
    </>
  );
}

export default Me;

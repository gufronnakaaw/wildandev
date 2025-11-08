import AboutMe from '@/components/AboutMe';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Wildan Workspace',
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

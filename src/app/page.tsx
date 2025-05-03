// src/app/page.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
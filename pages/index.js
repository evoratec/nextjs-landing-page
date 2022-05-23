import Head from "next/head";
import Hero from "./components/Hero";
import styles from "../styles/Home.module.css";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evoratec - Desarrollo a medida de aplicaciones</title>
        <meta
          name="description"
          content="Evoratec - Desarrollo a medida de aplicaciones"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <Statistics />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

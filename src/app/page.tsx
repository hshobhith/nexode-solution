import { Navbar, Footer, FloatingSidebar } from "@/components/layout";
import { Hero, About, Services, Portfolio, Team, Testimonials, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        {/* <Team /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Hero from "@/components/hero/hero";
import Galery from "@/components/inicio/galery";
import Local from "@/components/inicio/local";
import Services from "@/components/inicio/services";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />
      <main>
        {/* Description State */}
        <Local />

        {/* Services */}
        <Services />

        {/* Galery */}
        <Galery />
      </main> 
    </div>
  );
}

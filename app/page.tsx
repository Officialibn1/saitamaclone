import CryptoMade from "./components/CryptoMade";
import Hero from "./components/Hero";
import ImageCards from "./components/ImageCards";
import Latest from "./components/Latest";


export default function Home() {
  return (
    <section>
      <Hero />

      <ImageCards />

      <Latest />

      <CryptoMade />

    </section>
  )
}

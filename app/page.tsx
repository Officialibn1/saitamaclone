import BuySaitama from "./components/BuySaitama";
import CryptoMade from "./components/CryptoMade";
import CryptoSafe from "./components/CryptoSafe";
import Hero from "./components/Hero";
import ImageCards from "./components/ImageCards";
import Latest from "./components/Latest";
import Listed from "./components/Listed";
import OnBoard from "./components/OnBoard";
import Products from "./components/Products";
import SaitaAnalysis from "./components/SaitaAnalysis";
import SaitaPro from "./components/SaitaPro";
import UtilityToken from "./components/UtilityToken";


export default function Home() {
  return (
    <section>
      <Hero />

      <ImageCards />

      <Latest />

      <CryptoMade />

      <UtilityToken />

      <SaitaAnalysis />

      <Products />

      <BuySaitama />

      <SaitaPro />

      <Listed />

      <OnBoard />

      <CryptoSafe />

    </section>
  )
}

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Problem, SupplyChain } from "./components/Threats";
import { Idea, How, ClearSigning, Signs, Security, Setup, Compare, WhyNow } from "./components/Product";
import { Download, Faq, Footer } from "./components/Closing";
import { Hazard } from "./components/ui";

export default function App() {
  return (
    <>
      <a href="#main" class="skip">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Hazard />
        <Problem />
        <SupplyChain />
        <Idea />
        <How />
        <ClearSigning />
        <Signs />
        <Security />
        <Setup />
        <Compare />
        <WhyNow />
        <Hazard />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

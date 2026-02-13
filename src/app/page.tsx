import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MeetSanaLearn from "@/components/MeetSanaLearn";
import FeatureCarousel from "@/components/FeatureCarousel";
import SocialProof from "@/components/SocialProof";
import Partnership from "@/components/Partnership";
import CustomerStories from "@/components/CustomerStories";
import AIComparison from "@/components/AIComparison";
import Integrations from "@/components/Integrations";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MeetSanaLearn />
        <FeatureCarousel />
        <SocialProof />
        <Partnership />
        <CustomerStories />
        <AIComparison />
        <Integrations />
        <Mission />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

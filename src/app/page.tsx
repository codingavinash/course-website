import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footor";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestumonialCards from "@/components/TestumonialCards";
import UpcomingWeb from "@/components/UpcomingWeb";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChoose/>
      <TestumonialCards/>
      <UpcomingWeb/>
      <Instructor/>
      <Footer/>
    </main>
  );
}

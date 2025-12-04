import SocialLinksSection from "@/components/sections/SocialLinks";
import AboutSection from "@/components/sections/About/AboutSection";
import Projects from "@/components/sections/Projects/Projects";

export default async function Home() {
  return (
    <div>
      <AboutSection />
      <SocialLinksSection />
      <Projects />
    </div>
  );
}

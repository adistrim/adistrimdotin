import SocialLinksSection from "@/components/sections/SocialLinks";
import AboutSection from "@/components/sections/About/AboutSection";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <SocialLinksSection />
      <Projects />
    </main>
  );
}

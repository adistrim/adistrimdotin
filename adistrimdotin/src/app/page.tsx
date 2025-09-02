import SocialLinksSection from "@/components/sections/SocialLinks";
import AboutSection from "@/components/sections/AboutSection";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-3">
        <AboutSection />
      </section>

      <section className="mx-auto my-15">
        <SocialLinksSection />
      </section>

      <section className="mx-auto my-10">
        <Projects />
      </section>
    </main>
  );
}

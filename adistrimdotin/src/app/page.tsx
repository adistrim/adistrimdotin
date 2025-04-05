import { Recommendation } from "@/components/sections/recommendations";
import Projects from "@/components/sections/projects";
import Image from "next/image";
import SocialLinksSection from "@/components/sections/SocialLinks";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AboutSection />
        <div className="flex justify-center">
          <Image
            src="/my_profile.png"
            alt="Aditya Raj - Software Engineer"
            width={400}
            height={500}
            className="rounded-lg object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </section>

      <section className="mx-auto my-15">
        <SocialLinksSection />
      </section>

      <section className="mx-auto my-10">
        <Projects />
      </section>

      <section className="mx-auto my-10">
        <Recommendation />
      </section>
    </main>
  );
}

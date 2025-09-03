import { InstitutionLink } from "../ui/InstitutionLink/InstitutionLink";

export default function AboutSection() {
  return (
    <div className="md:col-span-2 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
          Hey, I'm Aditya 👋
        </h1>
        <div className="text-muted-foreground leading-relaxed">
          I'm a full-time Software Developer at <InstitutionLink
            href="https://konrad.com"
            logo="/konrad.png"
            name="Konrad"
            />, I mostly work with web and AI related stuff. This is my personal website I share my projects and things I'm curious about.
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
          About me? 🤔
        </h2>
        <div className="text-muted-foreground leading-relaxed">
          Earlier, I studied Computer Science & Engineering at <InstitutionLink
            href="https://jklu.edu.in"
            logo="/jklu_logo.webp"
            name="JKLU, Jaipur"
          />, spent time as a visiting student at <InstitutionLink
            href="https://iitjammu.ac.in"
            logo="/iit_jammu_logo.webp"
            name="IIT Jammu"
          />, and am an associate-alumni of <InstitutionLink
            href="https://www.iitgn.ac.in/"
            logo="/iit_gandhinagar_logo.webp"
            name="IIT Gandhinagar"
          />. I have a keen interest in aviation and tech. I always enjoy capturing photos and getting to know how our very complex world works.
        </div>
      </div>
    </div>
  );
}

import { InstitutionLink } from "../ui/InstitutionLink/InstitutionLink";

export default function AboutSection() {
  return (
    <div className="md:col-span-2 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
          Hey, I'm Aditya 👋
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Welcome to my personal website – a digital space where I share my passions without social media algorithms. Explore and enjoy my digital living room.
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
          About me? 🤔
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm a 4th-year BTech Computer Science & Engineering Student at <InstitutionLink
            href="https://jklu.edu.in"
            logo="/jklu_logo.webp"
            name="JKLU, Jaipur"
          />, currently spending my final year as a Visiting Student at <InstitutionLink
            href="https://iitjammu.ac.in"
            logo="/iit_jammu_logo.webp"
            name="IIT Jammu"
          />, and also an associate-alumni of <InstitutionLink
            href="https://www.iitgn.ac.in/"
            logo="/iit_gandhinagar_logo.webp"
            name="IIT Gandhinagar"
          />, on a journey to becoming a Software Engineer. I have a keen interest in <InstitutionLink
            href="https://aviationgrade.vercel.app"
            logo="/aviation_grade_logo.webp"
            name="aviation"
          /> and tech. I always enjoy capturing photos and getting to know how our very complex world works.
        </p>
      </div>
    </div>
  );
}

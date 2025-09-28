import LatestBlogPost from "./LatestBlogPost";
import GitHubStats from "./GitHubStats";
import { InstitutionLink } from "./InstitutionLink";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="md:col-span-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
          Hey, I'm Aditya 👋
        </h1>
        <div className="text-muted-foreground leading-relaxed flex flex-col gap-3">
          <div>
            Welcome to my personal website. This is where I share projects, experiments, and interests outside the noise of social media.
          </div>
          <div>
            I work as a <span className="text-foreground">Software Developer</span> at <InstitutionLink href="https://konrad.com" logo="/konrad.png" name="Konrad"/>, focusing on full-stack web applications and AI integrations. Previously, I interned here before moving into my current role.
          </div>
          <div>
            I studied <span className="text-foreground">Computer Science and Engineering</span> at <InstitutionLink href="https://jklu.edu.in" logo="/jklu_logo.webp" name="JKLU, Jaipur"/>, with visiting semesters at <InstitutionLink href="https://www.iitgn.ac.in/" logo="/iit_gandhinagar_logo.webp" name="IIT Gandhinagar"/> and <InstitutionLink href="https://iitjammu.ac.in" logo="/iit_jammu_logo.webp" name="IIT Jammu"/>.
          </div>
          <div>
            Outside of work, I&apos;m curious about aviation, photography, and the ways complex systems fit together.
          </div>
        </div>
      </div>
      
      <div className="md:col-span-2 flex flex-col justify-start gap-6">
        <GitHubStats />
        <LatestBlogPost />
      </div>
    </div>
  );
}

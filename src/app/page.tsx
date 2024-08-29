import { Recommendation } from "@/components/recommendations";
import Projects from "@/components/projects";
import Image from "next/image";
import Link from "next/link";
import SocialLinksSection from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="font-medium dark:text-gray-100 text-2xl mb-2 tracking-tighter">
            Hey, I'm Aditya Raj 👋
          </h1>
          <p className="prose prose-neutral dark:prose-invert text-sm dark:text-gray-300">
            Welcome to my personal website – a digital space where I share my
            passions without social media algorithms. Explore and enjoy my
            digital living room.
          </p>
          <br />
          <h1 className="font-medium dark:text-gray-100 my-2 text-xl tracking-tighter">
            About me? 🤔
          </h1>
          <p className="prose prose-neutral dark:prose-invert dark:text-gray-300">
            I'm a 4th-year BTech Computer Science & Engineering Student at{" "}
            <Link
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
              href="https://jklu.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/jklu_logo.webp"
                alt="JKLU Logo"
                width={14}
                height={14}
                className="h-3.5 w-auto mr-1"
              />{" "}
              JKLU, Jaipur
            </Link>
            , currently spending my final year as a Visiting Student at{" "}
            <Link
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
              href="https://iitjammu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/iit_jammu_logo.webp"
                alt="IIT JMU Logo"
                width={14}
                height={14}
                className="h-3.5 w-auto mr-1"
              />{" "}
              IIT Jammu
            </Link>
            , and also an associate-alumni of{" "}
            <Link
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
              href="https://www.iitgn.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/iit_gandhinagar_logo.webp"
                alt="IITGn Logo"
                width={14}
                height={14}
                className="h-3.5 w-auto mr-1"
              />{" "}
              IIT Gandhinagar
            </Link>
            , on a journey to becoming a Software Engineer. I have a keen
            interest in{" "}
            <Link
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
              href="https://aviationgrade.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/aviation_grade_logo.webp"
                alt="AG Logo"
                width={14}
                height={14}
                className="h-3.5 w-auto mr-1"
              />{" "}
              aviation
            </Link>{" "}
            and tech. I always enjoy capturing photos and getting to know how
            our very complex world works.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/my_profile.webp"
            alt="Aditya Raj"
            width={1233}
            height={1541}
            className="rounded-lg object-cover object-center"
          />
        </div>
      </section>
      <div className="mx-auto my-15">
        <SocialLinksSection />
      </div>
      <div className="mx-auto my-10">
        <Projects />
      </div>
      <div className="mx-auto my-10">
        <Recommendation />
      </div>
    </div>
  );
}

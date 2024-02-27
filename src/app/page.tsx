import recommendationsData from "./data/recommendations.json";
import RecommendationCard from "./components/linkedin";
import { Changa } from "next/font/google";

const changa = Changa({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`${changa.className} min-h-screen px-1`}>
      <section>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          Hey, I'm Aditya Raj 👋
        </h1>
        <p className="prose prose-neutral dark:prose-invert text-sm dark:text-gray-300">
          Welcome to my personal website – a digital haven where I share my
          passions without social media algorithms. Explore and enjoy my curated
          digital living room.
        </p>
        <br />
        <h1 className="font-medium my-2 text-xl tracking-tighter">
          About me? 🤔
        </h1>
        <p className="prose prose-neutral dark:prose-invert dark:text-gray-300">
          I am a 3rd-year BTech Computer Science & Engineering Student at <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" href="https://jklu.edu.in" target="_blank"><img src="/jklu_logo.png" alt="JKLU Logo" className="h-3.5 w-auto mr-1" /> JKLU, Jaipur</a>, and also an associate-alumni of <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" href="https://www.iitgn.ac.in/" target="_blank"><img src="/iit_gandhinagar_logo.png" alt="IITGn Logo" className="h-3.5 w-auto mr-1" /> IIT Gandhinagar</a>, on a journey to becoming a Software Engineer. I have a keen interest in <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" href="https://aviationgrade.vercel.app" target="_blank"><img src="/aviation_grade_logo.png" alt="AG Logo" className="h-3.5 w-auto mr-1" /> aviation</a> and tech. I always enjoy capturing photos and getting to know how our very complex world works.
        </p>
      </section>
      <div className="my-10">
        <h1 className="font-medium mt-4 text-xl mb-4 tracking-tighter">Recommendations</h1>
        {recommendationsData.map((recommendation: any) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </div>
    </div>
  );
}

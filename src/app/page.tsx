import recommendationsData from "./data/recommendations.json";
import RecommendationCard from "./components/linkedin";
import { Changa } from "next/font/google";

const changa = Changa({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`${changa.className} px-1`}>
      <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Hey, I'm Aditya Raj 👋
        </h1>
        <p className="prose prose-neutral dark:prose-invert">
          Welcome to my personal website – a digital haven where I share my
          passions without social media algorithms. Explore and enjoy my curated
          digital living room.
        </p>
        <br />
        <h1 className="font-medium my-4 text-xl tracking-tighter">
          About me? 🤔
        </h1>
        <p className="prose prose-neutral dark:prose-invert">
          I'm a 3rd-year BTech Computer Science & Engineering Student, on the
          journey to becoming a Software Engineer. I have a keen interest in
          technology and aircrafts. I enjoy capturing moments through
          photography and delving into the complexities of our world.
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

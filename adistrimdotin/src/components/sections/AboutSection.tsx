import { InstitutionLink } from "../ui/InstitutionLink/InstitutionLink";

export default function AboutSection() {
    return (
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
            <h2 className="font-medium dark:text-gray-100 my-2 text-xl tracking-tighter">
                About me? 🤔
            </h2>
            <p className="prose prose-neutral dark:prose-invert dark:text-gray-300">
                I'm a 4th-year BTech Computer Science & Engineering Student at{" "}
                <InstitutionLink
                    href="https://jklu.edu.in"
                    logo="/jklu_logo.webp"
                    name="JKLU, Jaipur"
                />
                , currently spending my final year as a Visiting Student at{" "}
                <InstitutionLink
                    href="https://iitjammu.ac.in"
                    logo="/iit_jammu_logo.webp"
                    name="IIT Jammu"
                />
                , and also an associate-alumni of{" "}
                <InstitutionLink
                    href="https://www.iitgn.ac.in/"
                    logo="/iit_gandhinagar_logo.webp"
                    name="IIT Gandhinagar"
                />
                , on a journey to becoming a Software Engineer. I have a keen
                interest in{" "}
                <InstitutionLink
                    href="https://aviationgrade.vercel.app"
                    logo="/aviation_grade_logo.webp"
                    name="aviation"
                />{" "}
                and tech. I always enjoy capturing photos and getting to know how
                our very complex world works.
            </p>
        </div>
    );
}

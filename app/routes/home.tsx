import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "constants";
import ResumeCard from "../components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeCheck" },
    { name: "description", content: "Feedback on Your CV!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications and Resume Rating</h1>
        <h2>Review your submissions and Check AI-powered feeback.</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}

    
  </main>
}

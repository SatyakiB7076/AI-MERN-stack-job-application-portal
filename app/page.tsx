import { FinalCta } from "@/components/homepage/FinalCta";
import { Hero } from "@/components/homepage/Hero";
import { SplitFeature } from "@/components/homepage/SplitFeature";
import { Testimonial } from "@/components/homepage/Testimonial";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <SplitFeature
          heading="Manage Your Job Search With Ease"
          imageAlt="Job match list with companies, match scores, salary estimates, and sources"
          imagePosition="right"
          imageSrc="/public/images/jobs-lists.png"
          imageHeight={1778}
          imageWidth={2364}
          items={[
            {
              title: "Find jobs that actually fit",
              description:
                "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
            },
            {
              title: "Know the Company Before You Apply",
              description:
                "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
            },
            {
              title: "Keep track of every application",
              description:
                "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
            },
          ]}
        />
        <SplitFeature
          heading="Apply With More Confidence, Every Time"
          imageAlt="Agent log showing JobPilot scanning roles and preparing application materials"
          imagePosition="left"
          imageSrc="/public/images/agnet-log.png"
          imageHeight={1656}
          imageWidth={2144}
          items={[
            {
              title: "Understand your match score",
              description:
                "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
            },
            {
              title: "AI-Powered Job Matching",
              description:
                "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
            },
            {
              title: "Focus on the right roles",
              description:
                "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
            },
          ]}
        />
        <Testimonial />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

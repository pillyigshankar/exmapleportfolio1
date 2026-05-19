"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Globe, Mailbox, MapPin, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Navbar } from "@/components/portfolio/navbar";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  Backend: ["Spring Boot", "Django", "FastAPI", "REST APIs"],
  Tools: ["Git", "GitHub", "Docker", "Jenkins", "Postman"],
  Core: ["DBMS", "OOP", "DSA", "Operating Systems"],
};

const projects = [
  {
    name: "EarnSafe - AI-Powered Parametric Insurance Platform",
    tech: "Java, Spring Boot, React, FastAPI, MySQL",
    description:
      "AI-powered insurance platform automating income-loss protection for gig workers during severe weather disruptions with fraud detection and AI premium prediction.",
  },
  {
    name: "GlobalGo - Full-Stack Travel Booking Platform",
    tech: "Java, Spring Boot, React, MySQL",
    description:
      "Travel booking platform for flights, hotels, cabs, and restaurants with authentication, payment workflows, and responsive booking UI.",
  },
  {
    name: "ETOS - Employee Training & Onboarding System",
    tech: "Python, Django, SQLite, Bootstrap",
    description:
      "Role-based onboarding and training system with dashboards, AI chatbot support, employee tracking, and modular backend architecture.",
  },
];

const journey = [
  { year: "2022", title: "Started Computer Science Engineering", text: "Built strong fundamentals in OOP, DBMS, DSA, and Operating Systems." },
  { year: "2023", title: "Frontend Focus", text: "Developed responsive React.js interfaces with modern component-driven UI patterns." },
  { year: "2024", title: "Full-Stack Expansion", text: "Shipped full-stack projects using Spring Boot, Django, FastAPI, and SQL-backed architectures." },
  { year: "2025+", title: "Building Scalable Products", text: "Focused on premium user experiences and robust backend systems for production-ready applications." },
];

export default function Home() {
  return (
    <div className="bg-[#F5EFE6] text-[#2B2B2B]">
      <Navbar />

      <main className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#E8DFD1] blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-64 h-80 w-80 rounded-full bg-[#B08968]/20 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <section id="home" className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <AnimatedSection>
            <Badge className="mb-5">Frontend & Full-Stack Developer</Badge>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              PILLYI G SHANKAR
              <span className="mt-3 block text-[#B08968]">Building premium web experiences with modern engineering.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#2B2B2B]/75">
              Computer Science Engineering student skilled in Java, Spring Boot, Python, SQL, React.js, and Full-Stack Web Development. Passionate about building modern responsive applications with clean UI/UX and scalable backend systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg">
                  View Projects
                  <ArrowRight />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-[#2B2B2B]/80">
              <a className="inline-flex items-center gap-2 hover:text-[#2B2B2B]" href="https://github.com/pillyigshankar" rel="noreferrer" target="_blank">
                <Globe className="size-4" /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 hover:text-[#2B2B2B]" href="https://www.linkedin.com/in/pillyi-g-shankar" rel="noreferrer" target="_blank">
                <BriefcaseBusiness className="size-4" /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 hover:text-[#2B2B2B]" href="mailto:pillyigshankar.dev@gmail.com">
                <Mailbox className="size-4" /> Email
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Card className="relative overflow-hidden p-8">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#E8DFD1]" />
              <div className="relative space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E8DFD1] px-3 py-1 text-xs font-medium text-[#5E4A38]">
                  <Sparkles className="size-3.5" /> Available for opportunities
                </div>
                <h2 className="text-2xl font-semibold">Modern frontend developer portfolio</h2>
                <div className="flex items-center gap-2 text-sm text-[#2B2B2B]/75">
                  <MapPin className="size-4" /> Andhra Pradesh, India
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-[#E8DFD1]/70 p-4">
                    <p className="text-[#2B2B2B]/70">Primary Focus</p>
                    <p className="mt-1 font-medium">React + Full-Stack</p>
                  </div>
                  <div className="rounded-2xl bg-[#E8DFD1]/70 p-4">
                    <p className="text-[#2B2B2B]/70">Design Approach</p>
                    <p className="mt-1 font-medium">Minimal Luxury UI</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <SectionShell id="about" title="About" subtitle="Professional summary with engineering depth.">
          <AnimatedSection>
            <Card>
              <CardContent className="pt-6 text-base leading-8 text-[#2B2B2B]/85">
                Computer Science Engineering student experienced in frontend and full-stack web development with expertise in React, Spring Boot, Django, FastAPI, and database-driven applications.
              </CardContent>
            </Card>
          </AnimatedSection>
        </SectionShell>

        <SectionShell id="skills" title="Skills" subtitle="A balanced stack for elegant interfaces and scalable systems.">
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([group, values], index) => (
              <AnimatedSection key={group} delay={index * 0.05}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{group}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {values.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="projects" title="Projects" subtitle="Selected products with impact-focused architecture.">
          <div className="grid gap-5 lg:grid-cols-6">
            {projects.map((project, index) => (
              <AnimatedSection key={project.name} delay={index * 0.06}>
                <Card className={index === 0 ? "lg:col-span-4" : index === 1 ? "lg:col-span-2" : "lg:col-span-3"}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.tech}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-[#2B2B2B]/80">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="journey" title="Experience / Journey" subtitle="Continuous learning timeline.">
          <div className="space-y-4">
            {journey.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.06}>
                <Card>
                  <CardContent className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.15em] text-[#B08968]">{item.year}</p>
                      <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#2B2B2B]/75">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="achievements" title="Achievements" subtitle="Recognitions and milestones.">
          <AnimatedSection>
            <div className="grid gap-5 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Salesforce AI Associate</CardTitle>
                  <CardDescription>Industry certification focused on practical AI capabilities and workflows.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Guidewire DEVTrails 2026 Hackathon Participant</CardTitle>
                  <CardDescription>Collaborative innovation challenge centered on modern insurance technology.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </AnimatedSection>
        </SectionShell>

        <SectionShell id="contact" title="Contact" subtitle="Let&apos;s build something exceptional together.">
          <AnimatedSection>
            <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Reach out</CardTitle>
                  <CardDescription className="space-y-3 pt-2">
                    <a className="flex items-center gap-2 hover:text-[#2B2B2B]" href="https://github.com/pillyigshankar" rel="noreferrer" target="_blank">
                      <Globe className="size-4" /> GitHub
                    </a>
                    <a className="flex items-center gap-2 hover:text-[#2B2B2B]" href="https://www.linkedin.com/in/pillyi-g-shankar" rel="noreferrer" target="_blank">
                      <BriefcaseBusiness className="size-4" /> LinkedIn
                    </a>
                    <a className="flex items-center gap-2 hover:text-[#2B2B2B]" href="mailto:pillyigshankar.dev@gmail.com">
                      <Mailbox className="size-4" /> pillyigshankar.dev@gmail.com
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send a message</CardTitle>
                  <CardDescription>Frontend-only contact experience.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
                    <input className="h-11 w-full rounded-2xl border border-[#B08968]/20 bg-[#FFFDF9] px-4 text-sm outline-none transition focus:border-[#B08968]" name="name" placeholder="Your name" type="text" />
                    <input className="h-11 w-full rounded-2xl border border-[#B08968]/20 bg-[#FFFDF9] px-4 text-sm outline-none transition focus:border-[#B08968]" name="email" placeholder="Your email" type="email" />
                    <textarea className="min-h-28 w-full rounded-2xl border border-[#B08968]/20 bg-[#FFFDF9] p-4 text-sm outline-none transition focus:border-[#B08968]" name="message" placeholder="Tell me about your idea" />
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </SectionShell>
      </main>

      <footer className="border-t border-[#B08968]/20 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-[#2B2B2B]/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} PILLYI G SHANKAR</p>
          <p>Designed with a minimal luxury Apple-inspired aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}

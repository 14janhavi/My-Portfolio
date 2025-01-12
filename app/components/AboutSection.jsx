"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
      <li>Shree Samartha Junior College of Science, Akola(HSC)</li>
      <li>Government College of Engineering, Jalgaon(B.Tech CE)</li>    
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS44S115800008430517141">📘 Programming in Modern C++</a></li>
        <li><a href="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS105S56020023004061496">🏆Programming in Java</a></li>
        <li><a href="http://www.hackerrank.com/certificates/7544611266c8">📚Hackerrank</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
  <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <h2 className="text-4xl font-bold text-white mb-8 text-center">✨ About Me</h2>
    <div className="text-base lg:text-lg space-y-6">
      <p>
        I am a **Full Stack Web Developer** 💻 with a passion for building dynamic, interactive, and user-friendly web applications. I specialize in creating responsive designs and scalable solutions, utilizing a wide range of modern technologies to meet user needs effectively.
      </p>

      <h3 className="text-1xl font-semibold text-white">🔧 Technical Skills</h3>
      <ul className="list-disc pl-6">
        <li>
          <strong>Frontend:</strong> Proficient in JavaScript, React, HTML, and CSS , crafting intuitive and visually appealing interfaces.
        </li>
        <li>
          <strong>Backend:</strong> Skilled in Node.js, Express, Python, and PHP , with expertise in API development and server-side logic.
        </li>
        <li>
          <strong>Databases:</strong> Experience with SQL, PostgreSQL, and MongoDB for efficient data management.
        </li>
      </ul>

      <h3 className="text-1xl font-semibold text-white">🌟 Professional Attributes</h3>
      <ul className="list-disc pl-6">
        <li>🚀 Quick learner with a focus on staying updated on emerging technologies.</li>
        <li>🧠 Highly analytical and adept at solving complex challenges.</li>
        <li>🤝 A collaborative team player who values brainstorming and teamwork.</li>
      </ul>

      <p>
        I am eager to contribute my skills to create impactful web applications while continuing to grow and learn 📈. Whether it's designing sleek interfaces, building efficient backends, or managing data, I am committed to delivering high-quality results ✅.
      </p>
    </div>

    <div className="flex flex-row justify-start mt-8">
     
      <TabButton
        selectTab={() => handleTabChange("education")}
        active={tab === "education"}
      >
        🎓 Education
      </TabButton>
      <TabButton
        selectTab={() => handleTabChange("certifications")}
        active={tab === "certifications"}
      >
        🏆 Certifications
      </TabButton>
    </div>
    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
  </div>
</section>


  );
};

export default AboutSection;
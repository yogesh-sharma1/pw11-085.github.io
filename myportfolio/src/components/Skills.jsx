import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      name: "HTML5",
      count: 86,
    },
    {
      logo: "logo-css3",
      name: "CSS3",
      count: 71,
    },
    {
      logo: "logo-nodejs",
      name: "Node.js",
      count: 72,
    },
    {
      logo: "logo-react",
      name: "React.js",
      count: 82,
    },
    {
      logo: "logo-javascript",
      name: "Express.js",
      count: 82,
    },
    {
      logo: "leaf",
      name: "MongoDB",
      count: 70,
    },
    {
      logo: "logo-github",
      name: "Github",
      count: 76,
    },
    {
      logo: "cafe",
      name: "Java",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="skills-card border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center wrap rounded-full"
              >
                <div className="skills-card-img text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="skills-card-name text-xl mt-3">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
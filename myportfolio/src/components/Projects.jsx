import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.jpg";
import project_person from "../images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Big Basket",
      github_link: "https://github.com/pw11-085/imperial-web11",
      live_link: "jocular-unicorn-7cb959.netlify.app",
    },
    {
      img: project2,
      name: "Trivago",
      github_link: "https://github.com/Mahima29Jaiswal/TrivagoProject",
      live_link: "https://luminous-halva-f8c219.netlify.app",
    },
    {
      img: project3,
      name: "Hilling Tour",
      github_link: "https://github.com/ShubhamRaut187/Hilling_Travel_Agency",
      live_link: "https://luminous-halva-f8c219.netlify.app/",
    },
    {
      img: project3,
      name: "Go Social",
      github_link: "https://github.com/pw11-085/go-social-frontend",
      live_link: "https://github.com/pw11-085/social-media-project",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="project-card h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="project-title text-xl my-4">{project_info.name}</h3>
                  <p className="project-description">This is a good Project</p>
                  <p className="project-tech-stack">
                    <span className="text-orange-400">Tech Stack: </span>HTML, CSS, JS, ReactJS
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="blank"
                      className="project-github-link text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="blank"
                      className="project-deployed-link text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

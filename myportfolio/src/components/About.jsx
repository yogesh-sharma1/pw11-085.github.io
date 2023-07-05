import React from "react";
import aboutImg from "../images/hireMe.png";
import { Link } from  "react-router-dom"

const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "5" },
    { text: "Companies Work", count: "01" },
  ];

  const handleDownload = () => {
    // const link = document.createElement('a');
    // link.download = 'Yogesh-Sharma-Resume.pdf';
    // link.href = "https://drive.google.com/file/d/15kvLSxLx1J8EfS-XprMHQhgIowd-TABQ/view?usp=sharing";
    // document.body.appendChild(link)
    // link.click();
    // link.remove();C:\Users\PAVILION\Desktop\GithubPortFolio\pw11-085.github.io\myportfolio\src\images\Yogesh-Sharma-Resume.pdf
    return window.open("myportfolio/src/images/Yogesh-Sharma-Resume.pdf");
  };


  return (
    <section id="about" className="about section py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p id="user-detail-intro" className="text-justify leading-7 w-11/12 mx-auto">
              Passionate MERN Stack Developer. Have Experience of 1 year in web development. Worked on various modern technologies such as MongoDB, Express.js, React, and Node.js. Skilled in frontend and backend development, creating robust and scalable web applications. Committed to delivering exceptional user experiences through innovative solutions. Seeking new opportunities to contribute and enhance skills.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <Link id="resume-link-1" 
                target="_blank"
                rel="noreferrer"
                class="nav-link resume"
                onClick={handleDownload} 
                download={'Yogesh-Sharma-Resume'}
                href={"https://drive.google.com/file/d/15kvLSxLx1J8EfS-XprMHQhgIowd-TABQ/view?usp=sharing"}
              >
                <button id="resume-button-1">
                  Resume
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt="AboutImage"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

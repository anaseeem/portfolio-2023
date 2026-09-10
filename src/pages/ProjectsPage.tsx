import Project1 from "@/assets/project1.png";
import Project2 from "@/assets/project2.png";
import Project3 from "@/assets/project3.png";
import Project4 from "@/assets/project4.png";
import Project5 from "@/assets/project5.png";
import Project6 from "@/assets/project6.png";
import { Heading1 } from "@/components/special/Typography";
import { TbArrowNarrowDown as ArrowDown } from "react-icons/tb";

interface Project {
  name: string
  desc: string
  img: string
  href: string
}

const ProjectsPage: React.FC = () => {
  const projects: Record<string, Project> = {
    first: {
      name: "Rongberong",
      desc: "Color palette finder and generator",
      img: Project1,
      href: "https://rongberong.vercel.app/",
    },
    second: {
      name: "Muvitime",
      desc: "Screen sharing and video calling",
      img: Project2,
      href: "https://muvitime.vercel.app/",
    },
    third: {
      name: "Satlight",
      desc: "Track every sattelights out there",
      img: Project3,
      href: "https://satlight.vercel.app/",
    },
    four: {
      name: "Kano",
      desc: "Furniture for you and your next genreation",
      img: Project4,
      href: "https://kano-furniture.vercel.app/",
    },
    five: {
      name: "Old-portfolio",
      desc: "One of my old portfolios ( I have a few 😐 )",
      img: Project5,
      href: "https://portfolio-flame-eight-18.vercel.app/",
    },
    six: {
      name: "Little Games",
      desc: "Some simple games I tried to make to spend my idle time, left incomplete",
      img: Project6,
      href: "https://games-tan-five.vercel.app/",
    },
  };
  const projectArr = Object.values(projects);
  console.log(projectArr);
  return (
    <div className="font-secondary">
      <section className="mb-40">
        <div className="container">
          <Heading1 className="float-none text-center">My projects</Heading1>
          <p className="pt-3 text-accent text-center text-xl">
            Here are some of my projects{" "}
          </p>

          <div className="flex items-center justify-center mt-20">
            <div className="">
              <ArrowDown className="w-10 h-16" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-40">
        <ul className="container flex flex-col gap-10">
          {projectArr.map((project, projectIdx) => {
            return (
              <li
                key={projectIdx}
                className="border-2 border-primary shadow-md rounded-lg">
                <a
                  href={project.href}
                  className="px-3 py-5 xsm:p-4 bg-background text-foreground flex flex-col md:flex-row gap-10 rounded-lg">
                  <div className="flex flex-2 flex-col">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={project.img}
                      alt={project.name}
                    />
                  </div>

                  <div className="flex-4 text-center flex flex-col items-center justify-center">
                    <h5 className="font-semibold text-2xl uppercase">
                      {project.name}
                    </h5>
                    <p className="font-primary text-lg">{project.desc}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ProjectsPage;

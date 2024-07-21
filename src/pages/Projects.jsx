import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My Latest{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      I have started several projects while I was completing my studies as an information systems student, but this is true
        the one closest to my heart. Many of them are open source, so if
        You find something that interests you, don't hesitate to do it
        explore the code base and contribute your ideas for further improvements.
        Your collaboration is greatly appreciated!
      </p>

      <div className='gap-28 grid md:grid-cols-2 grid-cols-1 my-20'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full flex flex-col items-center' key={project.name}>
            <div className='block-container w-72 h-40'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.thumbnail}
                  alt='threads'
                  className='w-[70%] object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={`/projects/${project.id}`}
                  
                  className='font-semibold text-blue-600'

                >
                  Read more
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

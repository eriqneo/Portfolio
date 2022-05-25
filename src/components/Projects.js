import {projects} from '../data'

const Projects = () => {
    return (
        <section id="projects" className="text-gray-300 bg-cyan-800 body-font">
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <i className="bx bx-code-block bx-lg"></i>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        Apps I've Built
                    </h1>
                     <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        The following are some of the websites and apps I've Built. Feel free to check them out.
                    and reach out if you have any questions.
                    </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {projects.map((project) => (
                        <a href={project.link}
                            key={project.image}
                            className='sm:w-1/2 w-100 p-4'>
                            <div className='flex relative' >
                                <img src={project.image}
                                    alt="gallery"
                                    className = 'absolute inset-0 w-full h-full object-cover object-center' />
                            </div>
                            <div className="px-8 py-10 relative z-10 w-full bg-gray-900 opacity-1 hover:opacity-50">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                                         {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                      </h1>
                                     <p className="leading-relaxed">{project.description}</p>
                                         </div>
                           </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;

const About = () => {
    return (
        <section id="about" >
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" >
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi 👋 I am Erick.
                        <br className="hidden lg:inline-block" />I love to build nifty and amazing
            apps.
                    </h1>
                     <p className="mb-8 leading-relaxed">
                        I am a passionate web developer with a background in business and a passion for technology.
                        I believe I have vast knowledge in web development and I am always looking to master more.
                        Currently, am focused and interested in building Fin-Tech apps and websites to promote and
                        market my client's business.
                    </p>
                    <div className="flex justify-center">
                        <a
              href="#contact"
              className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
              Work With Me
                        </a>
                        <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
                    </div>
                </div>
                 <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./HeroNeo1.png"
          />
        </div>
            </div>
        </section>
    )
}

export default About;

const Contact = () => {
    return (
         <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=kisumu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Nairobi Road <br />
                Nakuru, Kenya
              </p>
                        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 clasName="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a  href='mailto' className="text-indigo-400 leading-relaxed">
                erick.atura@outlook.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+254 784 051 959</p>
            </div>
          </div>
        </div>
        <form
            action="https://formspree.io/f/xoqrreak"
            name="contact"
            method="POST"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
              Do you have a business problem that needs automation? Or do you need a Website? I can
              Assist you with that. Let me know what you need and I will get back to you as soon as
              possible. Let's connect.😄
                    </p>
        <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
                name="name"
                required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-orange-200 focus:ring-2 focus:ring-orange-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
                name="email"
                required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-orange-200 focus:ring-2 focus:ring-orange-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
                    </div>
        <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
                name="message"
                required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-orange-200 focus:ring-2 focus:ring-orange-800 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
    )
}


export default Contact;
 
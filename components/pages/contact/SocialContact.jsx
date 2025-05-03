import { FaDiscord, FaLinkedinIn, FaDribbble } from "react-icons/fa";

export default function SocialContact() {
  return (
    <section className=" mt-15 md:mt-18 lg:mt-24 px-5 md:px-10 lg:px-10 xl:px-20 xl:max-w-screen-2xl xl:mx-auto p-6  rounded-lg">
      <div className="">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-[1] xl:max-w-3xl" style={{ letterSpacing: "-0.05em" }}>
          It’s a nice looking web form, but
          you’d like to speak to a person?
        </h1>

        <div className="mt-12 w-full lg:ml-50 xl:ml-60" style={{ letterSpacing: "-0.05em" }}>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 font-helvetica">
            Jump into a quick chat
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 w-fit gap-4 lg:gap-8">
            {/* Discord */}
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 text-gray-900 hover:bg-gray-200 transition"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 aspect-square border border-gray-400 rounded-full">
                <FaDiscord className="w-6 h-6 text-gray-900" />
              </div>
              <span className="font-bold text-xl">Discord</span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 text-gray-900 hover:bg-gray-200 transition"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 aspect-square border border-gray-400 rounded-full">
                <FaLinkedinIn className="w-6 h-6 text-gray-900" />
              </div>
              <span className="font-bold text-xl">Linkedin</span>
            </a>

            {/* Dribbble */}
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 text-gray-900 hover:bg-gray-200 transition"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 aspect-square border border-gray-400 rounded-full">
                <FaDribbble className="w-6 h-6 text-gray-900" />
              </div>
              <span className="font-bold text-xl">Dribbble</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

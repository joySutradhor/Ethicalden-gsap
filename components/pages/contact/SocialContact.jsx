import { FaDiscord, FaLinkedinIn, FaDribbble } from "react-icons/fa";

export default function SocialContact() {
  return (
    <section className=" mt-24 px-5 md:px-20 lg:px-30 xl:max-w-screen-2xl xl:mx-auto p-6  rounded-lg">
      <div className="">
        <h1 className="text-4xl break-words max-w-3xl lg:text-5xl font-bold text-gray-900 leading-[1] font-helvetica">
          It’s a nice looking web form, but
          you’d like to speak to a person?
        </h1>

        <div className="mt-12 w-full lg:ml-50 xl:ml-60">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-helvetica">
            Jump into a quick chat
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 w-fit  gap-4 lg:gap-8">
            {/* Discord */}
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3  text-gray-900 hover:bg-gray-200 transition"
            >
              <FaDiscord className="w-12 h-12 lg:w-14 lg:h-14 border rounded-full p-2 font-helvetica" />
              <span className="font-bold text-xl">Discord</span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3  text-gray-900 hover:bg-gray-200 transition"
            >
              <FaLinkedinIn className="w-12 h-12 lg:w-14 lg:h-14 border rounded-full p-2 font-helvetica" />
              <span className="font-bold text-xl">Linkedin</span>
            </a>

            {/* Dribbble */}
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3  text-gray-900 hover:bg-gray-200 transition"
            >
              <FaDribbble className="w-12 h-12 lg:w-14 lg:h-14 border rounded-full p-2 font-helvetica" />
              <span className="font-bold text-xl">Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

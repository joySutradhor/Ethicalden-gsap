import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do we start working together?",
            answer: (
                <>
                    <p className="mb-3">
                        The first step is simple. Contact us via e-mail or our contact form and tell us about your next project.
                        We will then set up an introductory call to dive into more details about the goals and requirements.
                    </p>
                    <p className="mb-3">
                        This information helps us understand your project and results in our cost estimate and general timeline.
                    </p>
                    <p>
                        Once we reach agreement, we're ready to jump in and create some digital magic together!
                    </p>
                </>
            )
        },
        {
            question: "What does the process look like?",
            answer: (
                <>
                    <p className="mb-3">
                    With the paperwork signed and boring stuff agreed on, it’s time to get creative. We will assign a project lead from our side who will guide you through the process and be your point of contact for any and all questions and issues you might have.
                    </p>
                    <p className="mb-3">
                    At this point we usually set up a discovery workshop with all the shareholders so our design and development team can get a clear picture of the project, iron out all the necessary details and get all the potential roadblocks or issues out of the way.
                    </p>
                    <p className="mb-3">
                    After that it’s time to pull up our sleeves and get to work. Through design iterations and with your helpful feedback we work together towards the final product and launch. Depending on the size and structure of the project and its specific needs, we can set up weekly workshops/meetings, to discuss the work done and next steps.
                    </p>
                    <p className="mb-3">
                    For web and mobile projects that include front-end and back-end development, we will usually require a confirmation of design before moving to the next step.
                    </p>
                    <p>
                    Once the project is launched, we have your back. We provide support to get you through the early stages, educate your employees and, depending on the retainer contract, offer long-term maintenance support for any issues and further updates.
                    </p>
                </>
            )
        },
        {
            question: "How much will it cost me?",
            answer: (
                <>
                    <p className="mb-3">
                    No two projects are the same and cost estimates will always depend on the scale of the project and its requirements. Depending on your specific needs we offer various billing structures, such as fixed project fees or monthly retainers, and we are open to finding the best billing structure that works for you and your company.
                    </p>
                    <p className="mb-3">
                    Our general hourly rate is €45 and it’s mostly used for retainer purposes. A typical branding project could cost anywhere between €3.000 - €13.000, UX/UI design projects between €5.000 and €15.000, while development projects vary between €10.000 and €50.000.

                    </p>
                    <p>
                    The exact price of your project will usually be determined after our introductory meeting, where we will get our first proper look at its scope and requirements.
                    </p>
                </>
            )
        },
        {
            question: "When can you start?",
            answer: (
                <>
                    <p className="mb-3">
                    We pride ourselves at being a well tuned machine, which means in most cases we can take on new projects as they come. For most projects it takes a couple of weeks from the initial contact to set up the first introductory meeting and take it from there.
                    </p>
                    <p>
                    The actual design kick-off will also depend on details outside of our influence, such as the dynamics of delivering all necessary documentation, specifications and brand materials from the client’s side.
                    </p>
                </>
            )
        },
        {
            question: "What technologies and tools do you use?",
            answer: (
                <>
                    <p className="mb-3">
                    When it comes to UX/UI design, our primary tool of choice for all wireframing, design and prototyping purposes is Figma. For all other design purposes (print design, branding, video production etc.) we rely on the proven set of Adobe Creative Cloud tools.
                    </p>
                    <p>
                    Our development tech stack supports a wide variety of tools and technologies which can adapt to any industry and all project sizes. You can find more details on our Services page.
                    </p>
                </>
            )
        },
        {
            question: "How soon can you deliver?",
            answer: (
                <>
                    <p className="mb-3">
                    The delivery of the final product is the pinnacle of each project, yet the answer to this question highly depends on the type and scale of each project. While typical branding projects can take up to several weeks, a medium sized website up to five or six weeks, more extensive projects such as fintech solutions can last up to six months and more.
                    </p>
                    <p>
                    The timeline of each project (together with its cost estimate) is determined after the introductory meeting, once we have gathered enough information about the project’s scope and its base requirements.
                    </p>
                </>
            )
        },
    ];

    return (
        <div className="mt-24 px-5 md:px-20 lg:px-30 xl:max-w-screen-2xl xl:mx-auto p-6 ">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-[1] font-helvetica">
                Tackling your frequently asked <br /> questions head-on.
            </h1>

            <div className="flex justify-center">
                <div className="space-y-4 w-full lg:ml-50 xl:ml-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="  border-t border-t-gray-300  overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center space-x-4">
                                    <h2 className="text-3xl font-bold font-helvetica text-gray-800">
                                        {faq.question}
                                    </h2>
                                </div>
                                {activeIndex === index ? (
                                    <FiChevronUp className="h-12 w-12 text-cyan-900 border border-cyan-900 rounded-full p-2" />
                                ) : (
                                    <FiChevronDown className="h-12 w-12 text-cyan-900 border border-cyan-900 rounded-full p-2" />
                                )}
                            </button>

                            <div
                                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${activeIndex === index ? "block" : "hidden"
                                    }`}
                            >
                                <div className="text-black text-xl lg:text-2xl font-helvetica pl-14">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FAQSection;
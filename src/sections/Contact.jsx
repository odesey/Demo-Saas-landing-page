"use client";

// import "hi-contact";
import { useSectionInView } from "@/lib/hooks";
import ContactForm from "@/components/ContactForm";

export const Contact = () => {
  const { ref } = useSectionInView("#contact");
  return (
    <section
      id="contact"
      className="scroll-m-20 min-h-full mt-32 shadow-mdbl dark:shadow-big rounded-sm relative flex flex-1 pb-24"
      ref={ref}
    >
      <div className="px-8 mx-auto md:px-12 lg:px-32 max-w-7xl lg:pt-20 container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="pb-2 text-4xl font-normal tracking-tight font-display lg:text-6xl text-primeBlue-300">
              Need <span className="block text-primeBlue-300">Additional</span>{" "}
              <span className="block text-primeBlue-300">Information?</span>
            </h1>
            <p className="max-w-xs mt-4 text-onyx-500 text-lg">
              Contact us anytime and we will get back to you in a timely manner.
            </p>
          </div>
          <div className="relative w-full mx-auto space-y-1 text-base">
            <ContactForm />
            {/* <hi-contact
              username="genesisapp"
              otp
              corners="rounded"
            ></hi-contact> */}
            {/* {faq.map((template, index) => (
              <div className="cursor-pointer group" key={index}>
                <Question title={template.question}>{template.answer}</Question>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { Question } from "@/components/Question";
import { useSectionInView } from "@/lib/hooks";

const faq = [
  {
    question: "How can I claim my church in GenesisApp?",
    answer:
      "Please use the contact form to claim your church on the GenesisApp platform."
  },
  {
    question: "Can I be a member of more than one church?",
    answer:
      "Currently you can be a member of only one church, this may change in the future."
  },
  {
    question: "How can I get an invite code?",
    answer: "Please use the contact form to request an invite code."
  },
  {
    question:
      "Will eveyone that uses GenesisApp be able to see my personal information?",
    answer:
      "Absolutely NOT! By default, not even members of your church can see your personal information. You must share your information with other members of your church."
  },
  {
    question: "How much does GenesisApp cost?",
    answer:
      "During our testing period, GenesisApp is free for 90 days. After that we expect pricing to be about ~$0.75 per member per month."
  },
  {
    question: "Are there any discounts available to small churches?",
    answer: "Yes, GenesisApp will be free for churches with 25 members or less."
  },
  {
    question: "Are all features available to all churches?",
    answer:
      "Yes, GenesisApp wants churches to focus on spreading the gospel and not software features."
  },
  {
    question: "Can I be an administrator of multiple churches?",
    answer:
      "No, in this version of GenesisApp you can only be the administrator of a single church."
  },
  {
    question: "Can I upload pictures of my church?",
    answer: "This option will be available in the near future."
  },
  {
    question: "Can my members upload pictures in the members directory?",
    answer: "This option will be available in the near future."
  },
  {
    question: "I have another question that was not answered here",
    answer:
      "Please use the contact form to ask any additional questions you may have."
  }
];

export const Faq = () => {
  const { ref } = useSectionInView("#faq");
  return (
    <section id="faq" className="scroll-m-20 " ref={ref}>
      <div className="px-8 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="pb-2 text-4xl font-normal tracking-tight text-transparent bg-gradient-to-r from-primeBlue-200 via-primeBlue-300 to-primeBlue-500 bg-clip-text font-display lg:text-6xl">
              Frequently <span className="block">asked</span>{" "}
              <span className="block">questions</span>
            </h1>
            <p className="max-w-xs mt-4 text-onyx-500">
              You've got questions, hopefully we've got your answers.
            </p>
          </div>
          <div className="relative w-full mx-auto space-y-1 text-base">
            {faq.map((template, index) => (
              <div className="cursor-pointer group" key={index}>
                <Question title={template.question}>{template.answer}</Question>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

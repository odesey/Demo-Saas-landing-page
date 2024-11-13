"use client";

import { Question } from "@/components/Question";
import { useSectionInView } from "@/lib/hooks";

const faq = [
  {
    question: "What is brand identity design?",
    answer:
      "Brand identity design is the process of creating a visual and emotional representation of a brand. It includes elements like logos, colors, typography, and messaging that collectively communicate a brand's essence and values."
  },
  {
    question: "Who can benefit from this course?",
    answer:
      "Our course is designed for marketers, entrepreneurs, designers, and anyone interested in mastering the art of brand identity design. Whether you're new to the field or looking to enhance your skills, our content caters to various skill levels."
  },
  {
    question: "Are there any prerequisites for the course?",
    answer:
      "No prerequisites are required. Basic familiarity with design concepts and marketing principles can be helpful, but our course is structured to accommodate learners of all backgrounds."
  },
  {
    question: "How will this course help my marketing efforts?",
    answer:
      "Understanding brand identity design equips you to create consistent and impactful branding materials that resonate with your target audience. This leads to better brand recognition, trust, and engagement, enhancing the effectiveness of your marketing campaigns."
  },
  {
    question: "What software/tools will I need?",
    answer:
      "While we recommend having access to design tools like Adobe Creative Suite, the course focuses more on the concepts and principles of brand identity design rather than specific software. However, having design tools can aid in applying what you learn."
  },
  {
    question: "Is the course self-paced?",
    answer:
      "Yes, our course is self-paced, allowing you to learn at your own convenience. This flexible approach enables you to balance your learning with other commitments."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, upon successfully completing the course and its assignments, you will receive a certificate of completion that recognizes your efforts in mastering brand identity design for marketers."
  },
  {
    question: "How can I enroll in the course?",
    answer:
      "Enrolling is simple! Just head to our enrollment page, choose the course, and follow the instructions to get started on your brand identity design journey."
  },
  {
    question: "Can I access the course materials after completion?",
    answer:
      "Yes, you'll have continued access to the course materials even after completing the course. You can revisit the content, refresh your knowledge, and reference the materials whenever needed."
  },
  {
    question: "How can I get in touch for further questions?",
    answer:
      "Feel free to reach out to our support team at [email@example.com](mailto:email@example.com) for any further questions, concerns, or assistance you may need."
  }
];

export const Faq = () => {
  const { ref } = useSectionInView("#faq");
  return (
    <section id="faq" className="scroll-m-20" ref={ref}>
      <div className="px-8 mx-auto md:px-12 lg:px-32 max-w-7xl lg:pt-20">
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

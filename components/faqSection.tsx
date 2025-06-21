import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How many people can be on a team?",
    answer: "Teams can have up to 4 people.",
  },
  {
    question: "What if I don’t have a team?",
    answer: "You can sign up solo and we’ll help match you with a team!",
  },
  {
    question: "How much does it cost to attend?",
    answer: "It's completely free to attend.",
  },
  {
    question: "Is there a theme for projects?",
    answer: "Yes! Themes will be announced during opening ceremonies.",
  },
  {
    question: "How long will the hackathon last?",
    answer: "Typically 36 hours from start to submission.",
  },
  {
    question: "Who can participate?",
    answer: "All high school and university students are welcome!",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    console.log("test");
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[50%] ml-[10%] mt-[20%] text-black bg-white border-[8px] border-transparent [border-image:linear-gradient(180deg,#9286FF,#8462FF)_1] z-30">
      <div className="z-20 w-full h-full px-6 py-10 border-[8px] border-[#7c7c7c] ">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-t py-4">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left flex items-center justify-between text-lg font-medium cursor-pointer"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`my-2 overflow-hidden transition-all duration-300 ease-in-out transform ${
                openIndex === index ? "h-fit scale-y-100" : "h-0 scale-y-0"
              }`}
              style={{ transformOrigin: "top" }}
            >
              <span className="block mt-4 text-left">
                {faq.answer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

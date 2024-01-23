import { useState } from "react";
import { faqs } from "../../data/content";
import Question from "./Question";

function Faqs() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="flex max-w-[1450px] px-10 mx-auto py-[96px] justify-between gap-4">
      <div className="flex flex-col max-w-[547px]">
        <p className="text-[#175CD3] text-lg font-semibold mb-3">Support</p>
        <h4 className="text-[#1D2939] text-5xl font-semibold mb-5">FAQs</h4>
        <p className="text-[#667085] text-2xl">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="underline decoration-solid hover:cursor-pointer">
            chat to our friendly team.
          </span>
        </p>
      </div>

      <div className="max-w-[765px] divide-y-[1px] divide-[#EAECF0] transition-all duration-1000">
        {faqs.map((question, i) => (
          <Question
            key={question.question}
            questions={question}
            num={i}
            curOpen={curOpen}
            onOpen={setCurOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default Faqs;

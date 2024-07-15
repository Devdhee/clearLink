import plus from "../assets/plus-circle.svg";
import minus from "../assets/minus-circle.svg";

function Question({ questions, num, curOpen, onOpen }) {
  const { question, answer } = questions;

  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      onClick={handleToggle}
      className={`p-8 lg:p-4 md:p-2  ${
        isOpen ? "bg-[#F9FAFB] border border-[#F9FAFB] rounded-[16px]" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-6 hover:cursor-pointer lg:gap-3 md:gap-2">
        <p className="text-[#101828] font-semibold text-xl mb-2 lg:text-lg md:text-base lg:w-full">
          {question}
        </p>
        <p className="lg:inline-block lg:justify-end">
          {isOpen ? (
            <img src={minus} alt="minus" className="md:size-5" />
          ) : (
            <img src={plus} alt="plus" className="md:size-5" />
          )}
        </p>
      </div>

      {isOpen && (
        <div className="pb-4">
          <p className=" text-[#475467] text-lg max-w-[653px] lg:text-base md:text-sm">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default Question;

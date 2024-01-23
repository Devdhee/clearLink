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
      className={`p-8  ${
        isOpen ? "bg-[#F9FAFB] border border-[#F9FAFB] rounded-[16px]" : ""
      }`}
    >
      <div className="flex justify-between gap-6 hover:cursor-pointer items-center">
        <p className="text-[#101828] font-semibold text-xl mb-2">{question}</p>
        <p className="">
          {isOpen ? (
            <img src={minus} alt="minus" />
          ) : (
            <img src={plus} alt="plus" />
          )}
        </p>
      </div>

      {isOpen && (
        <div className="pb-4">
          <p className=" text-[#475467] text-lg max-w-[653px]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Question;

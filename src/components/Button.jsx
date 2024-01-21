function Button({ children, type }) {
  const base =
    "text-base inline-block font-semibold transition-colors duration-300 bg-[#175CD3] rounded-[100px] text-[#FFFFFF] hover:bg-[#BFDBFE]focus:outline-none focus:ring focus:ring-[#BFDBFE] focus:ring-offset-2 disabled:cursor-not-allowed border-[1px] border-[#98A2B3] font-inter";

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3",
    small: base + " py-2 px-6 text-sm",
    secondary:
      "text-sm inline-block font-semibold transition-colors duration-300 bg-[#ffffff] rounded-[100px] text-[#101828] hover:bg-[#BFDBFE]focus:outline-none focus:ring focus:ring-[#BFDBFE] focus:ring-offset-2 disabled:cursor-not-allowed border-[1px] border-[#98A2B3] py-2 px-6 font-inter",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;

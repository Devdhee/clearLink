function Button({ children, type }) {
  const base =
    "text-base inline-block font-semibold bg-[#175CD3] rounded-[100px] text-[#FFFFFF] focus:ring focus:ring-[#98A2B3] focus:ring-offset-2 border-[1px] border-[#98A2B3] font-inter ";

  const styles = {
    primary:
      base + " py-3 px-7 text-[18px] lg:py-2 lg:px-6 lg:text-base md:px-5",
    small: base + " py-2 px-6 text-sm",
    secondary:
      "text-base inline-block font-semibold bg-[#ffffff] rounded-[100px] text-[#101828] focus:ring focus:ring-[#98A2B3] focus:ring-offset-2  border-[1px] border-[#98A2B3] py-2 px-6 font-inter",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;

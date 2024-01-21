import Button from "./Button";
import Logo from "./Logo";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="mx-auto bg-[#F2F4F7] px-8 py-4 rounded-[100px] border-[#D0D5DD] border-[1px] flex justify-between">
      <Logo />
      <NavItems />

      <div className="flex gap-2">
        <Button type="secondary">Talk to sales</Button>
        <Button type="small">Sign up for free</Button>
      </div>
    </nav>
  );
}

export default Navbar;

import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={78} />
      </div>
    </nav>
  );
};

export default NavBar;

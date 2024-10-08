import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" width={28} height={28} alt="Logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">FinFolio</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;

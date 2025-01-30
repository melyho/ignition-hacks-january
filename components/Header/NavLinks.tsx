import { navItems } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: "3rem",
      }}
    >
      <Image
        color="black"
        width={50}
        height={50}
        src={"landing-page/logo.svg"}
        alt="logo"
      />
      {navItems.map((navItem) => (
        <div style={{ padding: "1rem", color: "white" }}>
          <Link href={navItem.href}>{navItem.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

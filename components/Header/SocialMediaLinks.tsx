import { socialMediaItems } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const SocialMediaLinks = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {socialMediaItems.map((socialMediaItem) => (
        <Link
          key={socialMediaItem.href}
          style={{ display: "block", padding: "1rem" }}
          href={socialMediaItem.href}
        >
          <Image
            color="white"
            width={30}
            height={30}
            alt={socialMediaItem.alt}
            src={socialMediaItem.icon}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;

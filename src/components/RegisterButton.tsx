"use client";

import React from 'react';

interface RegisterButtonProps {
  href: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({
  href,
  children = "Register Here",
  target = "_blank",
  rel = "noopener noreferrer"
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-block mt-[1vh] px-6 py-1 text-lg font-semibold text-white border-2 border-white rounded-[8px] text-center no-underline border-solid cursor-pointer transition-transform duration-300 z-[1000] hover:scale-105"
    >
      {children}
    </a>
  );
};

export default RegisterButton;
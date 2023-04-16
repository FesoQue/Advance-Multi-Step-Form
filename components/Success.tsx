"use client";
import React from "react";
import Image from "next/image";
import { GotoProp } from "../types";
import { motion } from "framer-motion";

const Success = ({ gotoForm }: GotoProp) => {
  const successVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "backIn",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      variants={successVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center md:mx-auto md:h-full md:max-w-[450px] md:justify-center"
    >
      <Image
        src={"/assets/images/icon-thank-you.svg"}
        alt="success"
        width={60}
        height={60}
        className="mb-5"
      />
      <h1 className="mb-2 text-2xl font-semibold text-marine-blue">
        Thank you!
      </h1>
      <p className=" mb-10 text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform, if you need support, please feel free to email at us{" "}
        <span>support@loremgaming.com</span>
      </p>
      <button
        className="border-1 flex items-center rounded border border-purplish-blue px-3 py-2 font-medium text-purplish-blue"
        onClick={() => window.location.reload()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <span>Restart</span>
      </button>
    </motion.section>
  );
};

export default Success;

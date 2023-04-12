import React from "react";
import Image from "next/image";

const Success = () => {
  return (
    <section className="flex flex-col items-center text-center">
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
      <p className=" text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform, if you need support, please feel free to email at us{" "}
        <span>support@loremgaming.com</span>
      </p>
    </section>
  );
};

export default Success;

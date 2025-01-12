"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid place-items-center text-center my-12 md:my-12 py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mx-auto">
          I&apos;m currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex justify-center gap-4">
          {/* Social Lihttps://github.comnks */}
          <Link href="https://github.com/14janhavi" target="_blank">
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/janhavi-janorkar-813b862b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <Image
              src="/linkedin-icon.svg"
              alt="Linkedin Icon"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

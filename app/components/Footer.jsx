import React from "react";

const Footer = () => {
  return (
    <footer className="footer h-24 flex items-center justify-center bg-gray-800 text-white">
      <p className="text-slate-400 text-sm text-center">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

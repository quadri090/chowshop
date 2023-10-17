import React from "react";
import ReactDom from "react-dom";

export default function LoginModal({ open, children }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[1000]"></div>
      <div className="sm:w-[600px] lg:w-[50%] fixed top-auto sm:top-[20px] left-[40px] sm:left-[100px] lg:left-[25%] right-[40px] sm:right-[100px] lg:right-[25%] z-[1000] bg-[#fff] rounded-[30px]">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

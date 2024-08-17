import React from "react";
import hasan from "../img/HasanLinkdin.png";

const About = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div class="avatar">
          <div class="w-[300px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={hasan} alt="" />
          </div>
        </div>
        <div className="md:ml-10">
          <h1 class="text-5xl font-bold">About my web development journey</h1>
          <p class="py-6">
            To establish me as a professional web developer, I acquired
            knowledge of HTML, CSS, JavaScript, ES6, React, React Router,
            Tailwind CSS, Bootstrap, Node Js, Express Js, Material UI, JWT
            Token, Next Js, MongoDB, React Query, DaisyUI, etc.
            <br />
            <br />
            Worked on developing several full-stack projects. Where I
            implemented functionality like stripe payment getaway, JWT token
            verification, admin Verification, order collection from customers,
            order management, dynamic review system, profile update facility,
            product management, inventory management, dynamic product stock
            status, and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

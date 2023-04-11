import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-justify">
            I am skilled in creating dynamic and interactive user interfaces using the React library. I have a solid foundation in HTML, CSS, and JavaScript, as well as experience working with modern front-end development tools such as Node.js, npm, and Webpack. I am committed to creating high-quality, performant, and user-friendly applications that provide a seamless user experience. 
        </p>

        <br />

        <p className="text-xl text-justify">
            I am a team player and have experience collaborating with designers, back-end developers, and other stakeholders to deliver successful projects on time and on budget.
        </p>
      </div>
    </div>
  );
};

export default About;
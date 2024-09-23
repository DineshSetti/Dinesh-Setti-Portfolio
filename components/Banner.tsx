import Image from "next/image";
import DineshImg from "../public/img/DineshImg.png";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={DineshImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-300 to-indigo-300 tracking-wider">
          Dinesh Setti
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          React JS Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          I am a passionate Frontend Developer with expertise in React,
          JavaScript, and modern web technologies. I create dynamic, responsive,
          and visually appealing user interfaces, ensuring optimal user
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          thrive in developing clean and reusable code, implementing state
          management using tools like Redux, and utilizing React's
          component-based architecture to build scalable web applications.
        </p>
      </div>
    </div>
  );
};

export default Banner;

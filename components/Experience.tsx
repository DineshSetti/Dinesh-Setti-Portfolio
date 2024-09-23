// import Title from "./Title";
// import { MdWork } from "react-icons/md";
// import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
// import ExperienceCard from "./ExperienceCard";

// const Experience = () => {
//   return (
//     <div className="wrapper">
//       <Title text="Experiences" icon={<MdWork />} />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <ExperienceCard
//           title="Intern"
//           subTitle="React Js Developer Jan-2024 - Present"
//           icon={<SiFreelancer />}
//         />
//         {/* <ExperienceCard
//           title="Toptal"
//           subTitle="MERN Stack Developer 2021 - present"
//           icon={<SiToptal />}
//         /> */}
//         <ExperienceCard
//           title="Freelancer"
//           subTitle="React Js Developer Jan-2024 - Present"
//           icon={<SiFreelancer />}
//         />

//         {/* <ExperienceCard
//           title="Fiverr"
//           subTitle="MERN Stack Developer 2019 - 2020"
//           icon={<SiFiverr />}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default Experience;

import Title from "./Title";
import { MdWork } from "react-icons/md"; // Use MdWork for job-related experiences
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Use MdWork for the "Intern" experience */}
        <ExperienceCard
          title="Intern"
          subTitle="React Js Developer Jan-2024 - Present"
          icon={<MdWork />}
        />
        {/* <ExperienceCard
          title="Toptal"
          subTitle="MERN Stack Developer 2021 - present"
          icon={<SiToptal />}
        /> */}
        <ExperienceCard
          title="Freelancer"
          subTitle="React Js Developer Jan-2024 - Present"
          icon={<SiFreelancer />}
        />

        {/* <ExperienceCard
          title="Fiverr"
          subTitle="MERN Stack Developer 2019 - 2020"
          icon={<SiFiverr />}
        /> */}
      </div>
    </div>
  );
};

export default Experience;

import { SectionWrapper } from "../hoc";
import {TechCarousel} from "./canvas";
import { BallCanvas } from "./canvas";
import { technologies2} from "../constants";

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       <TechCarousel />
//     </div>
//   );
// };

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies2.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>

      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");
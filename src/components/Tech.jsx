import { SectionWrapper } from "../hoc";
import {TechCarousel} from "./canvas";

const Tech = () => {
  return (
    <div className="flex justify-center items-center min-h-[600px] p-5 w-full h-full">
      <TechCarousel />
    </div>
  );
};

export default Tech;
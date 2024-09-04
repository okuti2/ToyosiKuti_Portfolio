import { SectionWrapper } from "../hoc";
import {TechCarousel} from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <TechCarousel />
    </div>
  );
};

export default SectionWrapper(Tech, "");
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="w-full xs:w-[250px]">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px} font-bold text-center">{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

// Define PropTypes for Computers component
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a passionate software developer with expertise in building web and mobile applications. 
      Skilled in React JS, React Native, Node JS, Three JS, JavaScript, Java, Express JS, MongoDB, and cloud computing, 
      I excel in developing scalable, modern solutions.
      A quick learner and strong communicator, I thrive in team settings and am always eager to adopt new technologies and refine my skills.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}

    </div>
   </>
  )
}

export default SectionWrapper(About, "about");
/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { Html, Text, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Panel = ({ position, data, isOpen, onToggle }) => {
    const groupRef = useRef();
    const [controlsEnabled, setControlsEnabled] = useState(false);
    const cameraRef = useRef();

    useEffect(() => {
        setControlsEnabled(true);
      }, []);

    // Floating animation effect
    useFrame(() => {
      if (groupRef.current) {
        //groupRef.current.rotation.y += 0.005; // Slight rotation for float effect
      }
    });

    return (
    <group ref={groupRef} position={position} className="w-full h-full">
        {/* Independent Camera for Each Panel */}
        <PerspectiveCamera
            ref={cameraRef}
            makeDefault={false}
            position={[0, 0, 10]}
            fov={50}
        />
      
      {/* Attach OrbitControls to the specific camera */}
      {controlsEnabled && (
        <OrbitControls
          camera={cameraRef.current}
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          target={groupRef.current?.position}
        />
      )}
        

        {/* Framer Motion Stacked Cards */}
        <Html position={[0, 4, 0]} center>
        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative flex flex-col items-center space-y-1 cursor-pointer"
            //onClick={handleToggle}
            onClick={onToggle}
          >
            {data.techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`absolute bg-black bg-opacity-60 border border-black rounded-lg p-4 ${isOpen ? 'z-50' : 'z-10'}`}
                style={{ position: isOpen ? 'fixed' : 'absolute' }}
                initial={{ x: 0, y: 0, opacity: 0.7, scale: 1 }}
                animate={
                  isOpen
                    ? {
                        x: Math.cos((index / data.techs.length) * 2 * Math.PI) * 100,
                        y: Math.sin((index / data.techs.length) * 2 * Math.PI) * 100,
                        opacity: 1,
                        scale: 1.1,
                      }
                    : { x: 0, y: 0, opacity: 0.7, scale: 1 }
                }
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.05, }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mx-auto mb-2"
                />
                <p className="text-white text-sm text-center">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Html>

        {/* 3D Horizontal Panel */}
        <mesh rotation={[Math.PI + 10, 0, 0]} position={[0, -2, -1]}> {/* Rotated flat panel */}
            {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            <boxGeometry args={[5, 0.3, 2]} />  {/* Widen the panel for better visual impact */}
            <meshStandardMaterial color="lightblue" />
        </mesh>
        <Text
            position={[0, -3, 0]} // Adjust position as needed
            anchorX="center"
            anchorY="middle"
            className="text-white text-[18px] font-bold"
        >
            {data.category}
        </Text>
    </group>
    );
  };


// Define PropTypes for Panel
Panel.propTypes = {
  position: PropTypes.array.isRequired,
  data: PropTypes.shape({
    category: PropTypes.string,
    techs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Panel;


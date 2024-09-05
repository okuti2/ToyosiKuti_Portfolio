/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Cylinder } from "@react-three/drei";
import { useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as THREE from "three";

// Function to create a canvas with text
function createTextCanvas(text, color) {
  const fontSize = 350;
  const canvas = document.createElement("canvas");
  canvas.width = 4096;
  canvas.height = 2048;
  const context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas to fully transparent

  context.fillStyle = "transparent";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = color;
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  return canvas;
}

// Component for the TextRing with rotating text around a cylinder
function TextRing({ text, position }) {
  const canvas = useMemo(() => createTextCanvas(text, "white"), [text]);
  const backCanvas = useMemo(() => createTextCanvas(text, "white"), [text]);
  const texture = useRef();
  const texture2 = useRef();

  useFrame(({ clock }) => {
    if (texture.current) texture.current.offset.x = clock.getElapsedTime() / 2;
    if (texture2.current) texture2.current.offset.x = clock.getElapsedTime() / 2;
  });

  const cylArgs = [4, 4, 2.5, 128, 1, true]; // Adjust the cylinder arguments if necessary

  return (
    <group position={position} rotation-y={Math.PI / 4} scale={[1, 1, 1]}>
      <Cylinder args={cylArgs} side={THREE.FrontSide}>
        <meshStandardMaterial transparent attach="material">
          <canvasTexture
            attach="map"
            repeat={[6, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>

      <Cylinder args={cylArgs}>
        <meshStandardMaterial attach="material" side={THREE.BackSide} >
          <canvasTexture
            attach="map"
            repeat={[8, 1]}
            image={backCanvas}
            premultiplyAlpha
            ref={texture2}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>
    </group>
  );
}

TextRing.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
};

// Main component rendering the TextRing and stacked cards
const Scene = ({ data, isOpen, onToggle }) => {
  const groupRef = useRef();
  const [, setHoveredIndex] = useState(null);

  return (
    <group ref={groupRef}>

      <TextRing text={data.category} position={[0,-2,0]} colorBack={'bg-primary'} />

      {/* Centered Stacked Cards */}
      <Html position={[0, 3, 0]} center>
        <div
          className="relative flex items-center justify-center"

        >
          <motion.div
            className="relative flex flex-col items-center space-y-1 cursor-pointer"
            onClick={onToggle}
          >
            {data.techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`absolute bg-transparent border border-none rounded-lg p-4 ${
                  isOpen ? "bg-opacity-100" : "bg-opacity-60"
                }`}
                initial={{ x: 0, y: 0, opacity: 0.7, scale: 1 }}
                animate={
                  isOpen
                    ? {
                        x: Math.cos((index / data.techs.length) * 2 * Math.PI) * 100,
                        y: Math.sin((index / data.techs.length) * 2 * Math.PI) * 100,
                        opacity: 1,
                        scale: 1.1,
                      }
                    : 
                    {
                      x: 0, y: 0, opacity: 0.7, scale: 1
                    }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.05,
                }}
                
                whileHover={
                  isOpen
                    ? {
                        scale: 1.3, // Increase scale when hovered
                        x: Math.cos((index / data.techs.length) * 2 * Math.PI) * 90,
                        //y: Math.sin((index / data.techs.length) * 2 * Math.PI) * 90,
                      }
                    : {
                        x: Math.cos((index / data.techs.length) * 2 * Math.PI) * 40,
                        y: Math.sin((index / data.techs.length) * 2 * Math.PI) * 40,
                        opacity: 1,
                        scale: 1.1,
                    }
                }
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-white text-sm text-center">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Html>

      <OrbitControls enableZoom={false} enablePan={false}/>
    </group>
  );
};

// Define PropTypes for Scene
Scene.propTypes = {
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

export default Scene;






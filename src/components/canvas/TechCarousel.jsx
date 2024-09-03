/* eslint-disable react/no-unknown-property */ 
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Panel from "./Panel"; 
import { technologies } from "../../constants"; 

import CanvasLoader from "../Loader";


const TechCarousel = () => {
  const [openPanel, setOpenPanel] = useState(null);
  return (
    
    <Canvas
        className="w-full h-full flex flex-direction-row"
        style={{overflow: "visible"}} 
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 10], fov: 40 }}
    >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<CanvasLoader />}>
            {/* <OrbitControls enableZoom={false} enablePan={false} /> */}

            {/* Render each panel with its technologies */}
            {technologies.map((category, index) => (
                <Panel 
                  key={index} 
                  position={[index * 8 - 24, 0, 0]} 
                  data={category} 
                  isOpen={openPanel === index} // Check if the current panel is open
                  onToggle={() => setOpenPanel(openPanel === index ? null : index)} 
                />
            ))}
        </Suspense>
        <Preload all />
    </Canvas>
  );
};

export default TechCarousel;

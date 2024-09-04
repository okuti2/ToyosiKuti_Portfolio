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
    <div className="w-full h-full flex flex-wrap justify-center items-center overflow-visible">
      {technologies.map((category, index) => (
        <div key={index} className="p-2">
          <Canvas
            style={{ width: "100%", height: "300px", overflow: "visible" }}
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [0, 0, 10], fov: 60 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls autoRotate enableZoom={false} enablePan={false} enableRotate={false} />
              <Panel 
                data={category} 
                isOpen={openPanel === index} 
                onToggle={() => setOpenPanel(openPanel === index ? null : index)} 
              />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default TechCarousel;

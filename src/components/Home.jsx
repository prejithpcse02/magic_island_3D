import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "./Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "./HomeInfo";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if ((window, innerWidth < 768)) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneScreen = () => {
    let screenScale = null;
    let screenPosition = null;
    if ((window, innerWidth < 768)) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustScreen();

  const [planeScale, planePosition] = adjustPlaneScreen();

  return (
    <>
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            {/*Sunlight*/}
            <directionalLight position={[1, 1, 1]} intensity={1.5} />
            {/*Equal Intensity Light Everywhere without shadows*/}
            <ambientLight intensity={0.2} />
            {/*Emits light from a point*/}
            {/*<pointLight />*/}
            {/* Similar but in an angle <spotLight />*/}
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Bird isRotating={isRotating} />
            <Plane
              planeScale={planeScale}
              planePosition={planePosition}
              isRotating={isRotating}
              rotation={[0, 20, 0]}
            />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}

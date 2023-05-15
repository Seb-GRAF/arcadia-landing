import {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  Stars,
  useScroll,
  Text
} from "@react-three/drei";
import ArcadiaShip from "./ArcadiaShip";
import MovingLights from "./MovingLights";
import {PerspectiveCamera, useCurrentSheet} from "@theatre/r3f";
import {editable as e} from "@theatre/r3f";
import {val} from "@theatre/core";

const Scene = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const sheet = useCurrentSheet()
  const scroll = useScroll();
  const cameraTargetRef = useRef();
  const introTextRef = useRef();

  useFrame(() => {
    const sequenceLength: number = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;

    // Messy, need to figure out a way how to do this with the theatreJs
    const title = document.querySelector('.title');
    const video = document.querySelector('#myVideo');

    sheet.sequence.position < 5 ? setIsIntroVisible(true) : setIsIntroVisible(false)

    
    if (!title) return;
    if (sheet.sequence.position > 24.5) {
      title.classList.add('reveal')
    } else {
      title.classList.remove('reveal')
    }

    if (!video) return;
    if (sheet.sequence.position >= 27.8) {
      video.classList.add('reveal')
    } else {
      video.classList.remove('reveal')
    }
  });

  return (
    <>
      <Float
        rotationIntensity={0.2} floatIntensity={2} speed={3}>
        <ArcadiaShip/>
      </Float>

      <spotLight position={[0, 20, 0]} angle={0.5} penumbra={0.2}
                 intensity={4} />

      <Environment  frames={Infinity} background  files="/orbital-sunset.hdr"/>

      <Environment frames={Infinity} resolution={256}>
        <MovingLights/>
        <Lightformer intensity={4} rotation-y={Math.PI / 2}
                     position={[-5, 1, -1]}
                     scale={[20, 0.1, 1]}/>
        <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]}
                     scale={[20, 0.5, 1]}/>
        <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]}
                     scale={[20, 1, 1]}/>
        <Float speed={5} floatIntensity={2} rotationIntensity={2}>
          <Lightformer form="ring" color="#F34A06" intensity={4} scale={30}
                       position={[15, 20, 20]} target={[0, 20, 10]}/>
        </Float>
      </Environment>

      <group position={[0, -1, 200]} visible={isIntroVisible}>
        <Text ref={introTextRef} position={[0, 1, 0]} color="white" anchorX="center" anchorY="middle" fontSize={1.5} frustumCulled={false}>Une nouvelle aventure commence...</Text>
      </group>
      
      <Stars radius={30} depth={100} count={3000} factor={5} fade saturation={10}/>

      {/* TheatreJS mesh for the camera to look at */}
      <e.mesh theatreKey="Camera Target" visible="editor" ref={cameraTargetRef}>
        <octahedronBufferGeometry args={[1, 1]}/>
        <meshPhongMaterial color="yellow"/>
      </e.mesh>
      <PerspectiveCamera
        theatreKey="Camera"
        lookAt={cameraTargetRef}
        makeDefault
        position={[0, 0, 0]}
        fov={30}
        near={0.1}
        far={70}
      />
    </>
  )
}

export default Scene
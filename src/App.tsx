import Scene from "./components/Scene";
import {getProject} from "@theatre/core";
import {Canvas} from "@react-three/fiber";
import {ScrollControls, Scroll} from "@react-three/drei";
import {SheetProvider} from "@theatre/r3f";
import flyThroughState from "./assets/state.json";
import Title from "./components/Title";
import {useEffect, useState} from "react";


const App = () => {
  const [hasStarted, setHasStarted] = useState(false)

  //** 👇 Replace "sheet" by the following line **//
  // const sheet = getProject("Fly Through").sheet("Scene");

  const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene");


  useEffect(() => {
    if (hasStarted) {
      const video = document.querySelector('#myVideo') as HTMLVideoElement;
      video?.classList.add('play')
    }
  }, [hasStarted])

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{position: [-10, 0, 15], fov: 30}}
              gl={{preserveDrawingBuffer: true}}>
        <ScrollControls pages={10} damping={20}>
          <SheetProvider sheet={sheet}>
            <Scene/>
          </SheetProvider>
          <Scroll html>
                <div
              className="px-16 relative top-[250vh] w-screen sm:w-[50vw] flex flex-col gap-24 text-xl p-4 items-center sm:text-3xl">
              <p className="max-w-[40rem] leading-normal">Un vaisseau d’une puissance et d’une
                grâce inégalées, une merveille d’ingénierie.</p>
            </div>
            <div
              className="px-16 relative top-[600vh] sm:top-[700vh] w-screen sm:w-[50vw] flex flex-col gap-24 text-xl p-4 items-center sm:text-3xl">
              <p className="max-w-[40rem] leading-normal">
                Quels secrets se cachent à l’intérieur de ses murs ? Quelles
                aventures attendent ceux qui auront le courage de rejoindre son
                équipage ? Seul le temps le dira…
              </p>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Title/>
      {!hasStarted && (
        <div className="fixed inset-0 w-screen h-screen bg-black z-50 pointer-events-none text-whites flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>

        </div>
      )}
      <video loop id="myVideo" autoPlay controls className="cursor-pointer z-10 fixed top-0 left-0 w-screen h-screen object-cover opacity-0 transition-opacity duration-1000" onClick={()=>setHasStarted(true)}>
        <source src="/arcadia-daft-punk.mp4#t=80" type="video/mp4"/>
      </video>
    </>
  )
    ;
}

export default App
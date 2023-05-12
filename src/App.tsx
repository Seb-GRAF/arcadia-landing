import Scene from "./components/Scene";
import {getProject} from "@theatre/core";
import {Canvas} from "@react-three/fiber";
import {ScrollControls, Scroll} from "@react-three/drei";
import {SheetProvider} from "@theatre/r3f";
import flyThroughState from "./assets/state.json";
import Title from "./components/Title";


const App = () => {
  //** 👇 Replace "sheet" by the following line **//
  // const sheet = getProject("Fly Through").sheet("Scene");

  const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene");
  

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
                grâce inégalées, une merveille d’ingénierie qui a voyagé à
                travers
                les profondeurs de l’espace et du temps. Ses lignes et ses
                armements redoutables laissent deviner une histoire légendaire,
                remplie d’exploits audacieux et de prouesses héroïques.</p>
            </div>
            <div
              className="px-16 relative top-[600vh] sm:top-[730vh] w-screen sm:w-[50vw] flex flex-col gap-24 text-xl p-4 items-center sm:text-3xl">
              <p className="max-w-[40rem] leading-normal">Alors que vous contemplez cette
                création magnifique, vous ne pouvez vous empêcher de ressentir
                un
                sentiment d’émerveillement et de fascination.
              </p>
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
    </>
  )
    ;
}

export default App
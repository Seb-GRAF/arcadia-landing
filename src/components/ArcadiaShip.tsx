import {useThree} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";

const ArcadiaShip = () => {
  const {viewport} = useThree()
  const {scene} = useGLTF('/arcadia-ship.glb')
  return <primitive scale={viewport.width / 20} object={scene}/>
}

export default ArcadiaShip
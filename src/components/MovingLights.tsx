import {ReactNode, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Lightformer} from "@react-three/drei";

type Props = {
  positions?: number[]
}

const MovingLights = ({positions = [2, 0, 2, 0, 2, 0, 2, 0]}: Props) => {
  const group = useRef<ReactNode>(null)
  useFrame((_, delta) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let currentZ = group.current?.position.z ?? 0
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    group.current && (currentZ += delta * 15) > 60 && ((group.current).position.z = -60)
  })
  return (
    <group rotation={[0, 0.5, 0]}>
      <group ref={group}>
        {positions.map((x, i) => (
          <Lightformer
            key={i}
            form="circle" intensity={4}
            rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]}
            scale={[3, 1, 1]}/>
        ))}
      </group>
    </group>
  )
}

export default MovingLights
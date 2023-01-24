import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const PolishMan = React.forwardRef(({ children, groupRotation, rotation, isSpinning, ...props }, ref) => {

    const polishManModel = useGLTF("https://polish-design-demo.zeabur.app/polish-man.glb")
    const mesh = useRef()

    useFrame((state, delta) => {
        mesh.current.geometry.center()
        if (isSpinning) {
            mesh.current.rotation.y += 0.04
        }
    })

    return (
        <group
            ref={ref}
            {...props}
            scale={0.14}
            rotation={groupRotation}
        >
            <mesh
                ref={mesh}
                name="polish-man002"
                geometry={polishManModel.nodes["polish-man"].geometry}
                material={polishManModel.nodes["polish-man"].material}
                rotation={rotation}
            // castShadow
            // receiveShadow
            >
                {children}
            </mesh>
        </group>
    )
})

export default PolishMan
// export default function PolishMan({ children, ...props }) {
//     console.log(props)
//     // const group = useRef()
//     const mesh = useRef()

//     const polishManModel = useGLTF("./polish-man.glb")

//     useFrame((state, delta) => {

//     })

//     return (
//         <group
//             // ref={group}
//             {...props}
//             scale={0.14}
//             rotation={[0, -Math.PI / 6, 0]}
//         >
//             <mesh
//                 ref={mesh}
//                 name="polish-man002"
//                 geometry={polishManModel.nodes["polish-man"].geometry}
//                 material={polishManModel.nodes["polish-man"].material}
//                 rotation-x={2.2 * Math.PI}
//             >
//                 {children}
//             </mesh>
//         </group>
//     )
// }
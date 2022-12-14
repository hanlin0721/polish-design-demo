import { OrbitControls, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import City from '../../components/Maps/City.js'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Experience = () => {

    const directionalLight = useRef()
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const backgroundRef = useRef()

    const groupRef = useRef()
    const cubeRef = useRef()

    useFrame(() => {
        // groupRef.current.rotation.y += 0.1
        // cubeRef.current.rotation.y += 0.1
    })

    return (
        <>
            <color ref={backgroundRef} args={['#fff']} attach="background" />

            <OrbitControls />

            <directionalLight
                ref={directionalLight}
                castShadow
                intensity={1}
                position={[0.1, 0.2, 0.09]}
                shadow-normalBias={0.04}
                color={'white'}
            />

            <ambientLight intensity={0.22} />
            {/* <pointLight color="red" intensity={1} position={[0, 0.1, 0]} /> */}

            <City position={[0, 0, 0]} />
        </>
    )
}

export default Experience
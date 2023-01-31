/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useControl from "../../store/useControl.js";
import gsap from "gsap";
import Test from "./Test.js";
import { useDeviceType } from "../../utils/window.js"

// const baseUrl = "https://polish-design-demo.zeabur.app"
// const baseUrl = "http://localhost:3000"

export default function City(props) {
    const [device] = useDeviceType()
    const group = useRef();
    const polishManHiddenRef = useRef()
    const polishManShowedRef = useRef()
    const polishManFloatingRef = useRef()
    const buildingRef = useRef()
    const othersBuildingRef = useRef()

    const projectTestRef = useRef()
    const projectTestGroupRef = useRef()
    const projectCSOnlineRef = useRef()

    const rawNFreshMeshRef = useRef()
    const projectRawNFreshRef = useRef()

    const fourDesireMeshRef = useRef()
    const projectFourDesireRef = useRef()

    const [smoothCameraPosition] = useState(() => new THREE.Vector3())
    const [smoothCameraTarget] = useState(() => new THREE.Vector3())

    const { nodes, animations } = useGLTF(`./230123_city.glb`)

    const { actions } = useAnimations(animations, group);

    const bakedGroundTexture = useTexture(`./20230120_ground.png`)
    bakedGroundTexture.flipY = false

    const bakedHousesTexture = useTexture(`./20230120_houses.png`)
    bakedHousesTexture.flipY = false

    const bakedHouses0Texture = useTexture(`./230120_houses_O.png`)
    bakedHouses0Texture.flipY = false

    const bakedHouse001Texture = useTexture(`./20230120_house001.png`)
    bakedHouse001Texture.flipY = false

    const bakedHouse002Texture = useTexture(`./20230120_house002.png`)
    bakedHouse002Texture.flipY = false

    const bakedHouse003Texture = useTexture(`./20230120_house003.png`)
    bakedHouse003Texture.flipY = false

    const bakedHouse004Texture = useTexture(`./20230120_house004.png`)
    bakedHouse004Texture.flipY = false

    const bakedHouse005Texture = useTexture(`./20230120_house005.png`)
    bakedHouse005Texture.flipY = false

    const bakedHouse006Texture = useTexture(`./20230120_house006.png`)
    bakedHouse006Texture.flipY = false

    const bakedHouse007Texture = useTexture(`./20230120_house007.png`)
    bakedHouse007Texture.flipY = false

    const bakedRoadTexture = useTexture(`./20230120_road.png`)
    bakedRoadTexture.flipY = false

    const bakedPolishManBlueTexture = useTexture(`./blue.png`)
    bakedPolishManBlueTexture.flipY = false

    // const bakedPolishManOrangeTexture = useTexture(`./orange.png`)
    // bakedPolishManOrangeTexture.flipY = false

    // const bakedPolishManWhiteTexture = useTexture(`./white.png`)
    // bakedPolishManWhiteTexture.flipY = false

    // const bakedPolishManYellowTexture = useTexture(`./yellow.png`)
    // bakedPolishManYellowTexture.flipY = false

    const { scene, scenes, scroll } = useControl(state => state)

    useEffect(() => {
        const unsubscribeReset = useControl.subscribe(
            (state) => state.scene,
            (value) => {
                console.log(value)
                if (value === 1) {
                    gsap.to(buildingRef.current.material, {
                        opacity: 1,
                    })
                    gsap.to(othersBuildingRef.current.material, {
                        opacity: 1,
                    })
                    gsap.to(fourDesireMeshRef.current.material, {
                        opacity: 1,
                    })
                    gsap.to(rawNFreshMeshRef.current.material, {
                        opacity: 1,
                    })
                    actions.Animation.reset()
                    actions.Animation.play()
                }
                if (value === 2) {
                    gsap.to(buildingRef.current.material, {
                        opacity: 0,
                    })
                    gsap.to(othersBuildingRef.current.material, {
                        opacity: 0,
                    })
                    gsap.to(fourDesireMeshRef.current.material, {
                        opacity: 0,
                    })
                    gsap.to(rawNFreshMeshRef.current.material, {
                        opacity: 0,
                    })
                }
                if (value === 3) {
                    gsap.to(buildingRef.current.material, {
                        opacity: 1,
                    })
                }
            }
        )

        actions.Animation.play()

        return () => {
            unsubscribeReset()
        }
    }, [])


    const polishManShowedFollowingHiddenOne = () => {
        const position = new THREE.Vector3(-0.025, 0.08, 0)
        position.applyQuaternion(polishManHiddenRef.current.quaternion)
        position.add(new THREE.Vector3(polishManHiddenRef.current.position.x, polishManHiddenRef.current.position.y, polishManHiddenRef.current.position.z))

        polishManShowedRef.current.position.copy(position)
        polishManShowedRef.current.rotation.copy(polishManHiddenRef.current.rotation)
    }

    const cameraFollow = ({
        objRef,
        initialPosition,
        initialTarget
    }) => {
        const cameraPosition = initialPosition
        cameraPosition.applyQuaternion(objRef.current.quaternion)
        cameraPosition.add(new THREE.Vector3(
            objRef.current.position.x,
            objRef.current.position.y,
            objRef.current.position.z,
        ))

        const cameraTarget = initialTarget
        cameraTarget.applyQuaternion(objRef.current.quaternion)
        cameraTarget.add(new THREE.Vector3(
            objRef.current.position.x,
            objRef.current.position.y,
            objRef.current.position.z,
        ))

        return {
            cameraPosition,
            cameraTarget
        }
    }


    useFrame((state, delta) => {

        if (scene === scenes.LOOKING_BLUE_POLISH_MAN) {
            const { cameraPosition, cameraTarget } = cameraFollow({
                objRef: polishManHiddenRef,
                initialPosition: new THREE.Vector3(-4, 9, -10),

                initialTarget: new THREE.Vector3(
                    device !== "desktop" ? -0 : -0,
                    device !== "desktop" ? 0.3 : 0,
                    device !== "desktop" ? -0.2 : 0
                )
            })

            smoothCameraPosition.lerp(cameraPosition, 4.2 * delta)
            smoothCameraTarget.lerp(cameraTarget, 4.2 * delta)

            state.camera.position.copy(smoothCameraPosition)
            state.camera.lookAt(smoothCameraTarget)
        }


        if (scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN) {
            const cameraPosition = new THREE.Vector3(
                polishManFloatingRef.current.position.x + (device !== "desktop" ? 0.3 : 0.18) + state.pointer.x * 0.01,
                polishManFloatingRef.current.position.y + state.pointer.y * 0.01,
                polishManFloatingRef.current.position.z + (device !== "desktop" ? 0.9 : 0.38)
            )
            const cameraTarget = new THREE.Vector3(
                polishManFloatingRef.current.position.x - (device !== "desktop" ? 0.08 : 0.09),
                polishManFloatingRef.current.position.y - (device !== "desktop" ? -0.05 : 0.01),
                polishManFloatingRef.current.position.z + (device !== "desktop" ? 0 : 0)
            )

            smoothCameraPosition.lerp(cameraPosition, 4.2 * delta)
            smoothCameraTarget.lerp(cameraTarget, 4.2 * delta)

            state.camera.position.copy(smoothCameraPosition)
            state.camera.lookAt(smoothCameraTarget)
        }

        if (scene == scenes.LOOKING_CSO) {
            projectTestRef.current.geometry.center()
            projectTestGroupRef.current.rotation.y += ((scroll * 4 / 1730) - projectTestGroupRef.current.rotation.y) * 0.1
            projectTestGroupRef.current.position.copy(projectCSOnlineRef.current.position)

            const cameraPosition = new THREE.Vector3(
                projectCSOnlineRef.current.position.x - (device !== "desktop" ? 1 : 1),
                projectCSOnlineRef.current.position.y,
                projectCSOnlineRef.current.position.z - (device !== "desktop" ? 0.5 : 1),
            )

            const cameraTarget = new THREE.Vector3(
                projectCSOnlineRef.current.position.x,
                projectCSOnlineRef.current.position.y,
                projectCSOnlineRef.current.position.z - (device !== "desktop" ? -0.025 : 0.5)
            )

            smoothCameraPosition.lerp(cameraPosition, 4.2 * delta)
            smoothCameraTarget.lerp(cameraTarget, 4.2 * delta)

            state.camera.position.copy(smoothCameraPosition)
            state.camera.lookAt(smoothCameraTarget)
        }

        if (scene == scenes.LOOKING_RAW_N_FRESH) {
            const cameraPosition = new THREE.Vector3(
                projectRawNFreshRef.current.position.x + 1.2,
                projectRawNFreshRef.current.position.y,
                projectRawNFreshRef.current.position.z + 1
            )

            const cameraTarget = new THREE.Vector3(
                projectRawNFreshRef.current.position.x + (device !== "desktop" ? 0 : -2),
                projectRawNFreshRef.current.position.y,
                projectRawNFreshRef.current.position.z
            )

            smoothCameraPosition.lerp(cameraPosition, 4.2 * delta)
            smoothCameraTarget.lerp(cameraTarget, 4.2 * delta)

            state.camera.position.copy(smoothCameraPosition)
            state.camera.lookAt(smoothCameraTarget)
        }

        if (scene == scenes.LOOKING_FOUR_DESIRE) {
            const cameraPosition = new THREE.Vector3(
                projectFourDesireRef.current.position.x - (device !== "desktop" ? 1.7 : 1.5),
                projectFourDesireRef.current.position.y,
                projectFourDesireRef.current.position.z - (device !== "desktop" ? 0.1 : 1)
            )

            const cameraTarget = new THREE.Vector3(
                projectFourDesireRef.current.position.x + 2,
                projectFourDesireRef.current.position.y,
                projectFourDesireRef.current.position.z
            )

            smoothCameraPosition.lerp(cameraPosition, 4.2 * delta)
            smoothCameraTarget.lerp(cameraTarget, 4.2 * delta)

            state.camera.position.copy(smoothCameraPosition)
            state.camera.lookAt(smoothCameraTarget)
        }

    })

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    visible={scene == 1}
                    name="ground"
                    castShadow
                    receiveShadow
                    geometry={nodes.ground.geometry}
                    material={nodes.ground.material}
                    position={[-6.22, 0.28, 1.13]}
                >
                    <meshBasicMaterial
                        map={bakedGroundTexture}
                    />
                </mesh>
                <mesh
                    ref={buildingRef}
                    name="houses"
                    castShadow
                    receiveShadow
                    geometry={nodes.houses.geometry}
                    material={nodes.houses.material}
                    position={[-4.43, 0.55, 5.9]}
                >
                    <meshBasicMaterial map={bakedHousesTexture} transparent={true} />
                </mesh>
                <mesh
                    ref={othersBuildingRef}
                    name="houses_others"
                    castShadow
                    receiveShadow
                    geometry={nodes.houses_others.geometry}
                    material={nodes.houses_others.material}
                    position={[-3.27, 0.13, 4.61]}
                >
                    <meshBasicMaterial map={bakedHouses0Texture} transparent={true} />
                </mesh>

                {/* 4 Desire */}
                <mesh visible={false} ref={projectFourDesireRef} position={[-0, 0.3, 1.45]} rotation-y={1}>
                    <boxGeometry args={[0.25, 0.25, 0.25]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                <mesh
                    ref={fourDesireMeshRef}
                    name="house001"
                    castShadow
                    receiveShadow
                    geometry={nodes.house001.geometry}
                    material={nodes.house001.material}
                    position={[0, 0.03, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial map={bakedHouse001Texture} transparent={true} />
                </mesh>

                {/* 沙西米 */}
                <mesh visible={false} ref={projectRawNFreshRef} position={[-1.45, 0.19, 1.17]} rotation-y={Math.PI * 0.25}>
                    <boxGeometry args={[0.25, 0.25, 0.25]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                <mesh
                    ref={rawNFreshMeshRef}
                    name="house002"
                    castShadow
                    receiveShadow
                    geometry={nodes.house002.geometry}
                    material={nodes.house002.material}
                    position={[0, -0.09, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial map={bakedHouse002Texture} transparent={true} />
                </mesh>

                {/* CSO */}
                <mesh visible={false} ref={projectCSOnlineRef} position={[-1.5, 0.12, 4.1]} rotation-y={Math.PI * 1.3}>
                    <boxGeometry args={[0.25, 0.25, 0.25]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                <group ref={projectTestGroupRef}>
                    <mesh
                        ref={projectTestRef}
                        name="house003"
                        castShadow
                        receiveShadow
                        geometry={nodes.house003.geometry}
                        material={nodes.house003.material}
                        position={[0, 0.03, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <meshBasicMaterial map={bakedHouse003Texture} transparent={true} />
                    </mesh>
                </group>


                {/* WASSUP */}
                <mesh visible={false} position={[-3.3, 0.49, 4.6]} rotation-y={Math.PI * 0.25}>
                    <boxGeometry args={[0.25, 0.25, 0.25]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                <mesh
                    name="house004"
                    castShadow
                    receiveShadow
                    geometry={nodes.house004.geometry}
                    material={nodes.house004.material}
                    position={[-3.27, 0.17, 4.61]}
                >
                    <meshBasicMaterial map={bakedHouse004Texture} transparent={true} />
                </mesh>
                <mesh
                    name="house005"
                    castShadow
                    receiveShadow
                    geometry={nodes.house005.geometry}
                    material={nodes.house005.material}
                    position={[-2.49, 0.44, 6.34]}
                >
                    <meshBasicMaterial map={bakedHouse005Texture} transparent={true} />
                </mesh>
                <mesh
                    name="house006"
                    castShadow
                    receiveShadow
                    geometry={nodes.house006.geometry}
                    material={nodes.house006.material}
                    position={[-3.56, 0.26, 7.56]}
                >
                    <meshBasicMaterial map={bakedHouse006Texture} transparent={true} />
                </mesh>
                <mesh
                    name="house007"
                    castShadow
                    receiveShadow
                    geometry={nodes.house007.geometry}
                    material={nodes.house007.material}
                    position={[-4.65, 0.19, 6.62]}
                >
                    <meshBasicMaterial map={bakedHouse007Texture} transparent={true} />
                </mesh>
                <mesh
                    visible={scene == 2}
                    castShadow
                    receiveShadow
                    geometry={nodes.ground.geometry}
                    material={nodes.ground.material}
                    position={[-6.22, 0.28, 1.13]}
                >
                    <meshBasicMaterial
                        color="#e7f9fd"
                    />
                </mesh>
                <mesh
                    name="road"
                    castShadow
                    receiveShadow
                    geometry={nodes.road.geometry}
                    material={nodes.road.material}
                    position={[-6.52, -0.47, 4.86]}
                    scale={[81.54, 36.47, 66.14]}
                >
                    <meshBasicMaterial map={bakedRoadTexture} />
                </mesh>

                {/* 磨人雕像 */}
                <mesh
                    name="polish-man002"
                    castShadow
                    receiveShadow
                    geometry={nodes["polish-man002"].geometry}
                    material={nodes["polish-man002"].material}
                    position={[-8.58, 0.16, 6.71]}
                    rotation={[-2.62, -0.86, -Math.PI]}
                    scale={0.84}
                >
                    {/* <meshBasicMaterial map={bakedPolishManYellowTexture} /> */}
                </mesh>

                <mesh
                    visible={false}
                    ref={polishManHiddenRef}
                    name="polish-man001"
                    castShadow
                    receiveShadow
                    geometry={nodes["polish-man001"].geometry}
                    material={nodes["polish-man001"].material}
                    rotation={[0, -Math.PI / 6, 0]}
                    scale={0.14}
                />

                {/* 實際要顯示的磨人 */}
                <Test
                    // visible={scene == 1}
                    visible={false}
                    ref={polishManShowedRef}
                    groupRotation={[0, -Math.PI / 6, 0]}
                    rotation={[2.2 * Math.PI, 0, 0]}
                    isSpinning={true}
                >
                    {/* <meshBasicMaterial map={bakedPolishManBlueTexture} /> */}
                    {/* <meshStandardMaterial map={bakedPolishManBlueTexture} /> */}
                </Test>

                {/* 實際要顯示的磨人 原地漂浮-藍色 */}
                <Test
                    visible={scene == 2}
                    ref={polishManFloatingRef}
                    position={[-0.55, 0.13, 1.3]}
                    rotation={[2.15 * Math.PI, 2.12 * Math.PI, 2.21 * Math.PI]}
                >
                    {/* <meshBasicMaterial map={bakedPolishManBlueTexture} /> */}
                </Test>
            </group>
        </group>
    );
}

useGLTF.preload(`./230123_city.glb`);

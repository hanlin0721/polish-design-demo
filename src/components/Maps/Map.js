import { Canvas } from '@react-three/fiber'
import Experience from '../../components/Maps/Experience.js'
import { memo } from 'react'
import useControl from "../../store/useControl.js";
import _ from 'lodash';
import * as THREE from 'three'
import { useRouter } from 'next/router.js';
const Map = memo(() => {
    const nextScene = useControl((state) => state.nextScene)
    const prevScene = useControl((state) => state.prevScene)
    const router = useRouter();
    const isWorkPage = () => {
        return router.asPath === "/work"
    }

    const next = _.debounce(function () {
        console.log('next')
        nextScene()
    }, 1000, {
        leading: true,
        trailing: false
    })

    const prev = _.debounce(function () {
        prevScene()
        console.log('prev')
    }, 1000, {
        leading: true,
        trailing: false
    })

    const scrollHandler = (e) => {
        if (isWorkPage()) {
            return
        }
        if (e.deltaY > 0) {
            next()
        }
        if (e.deltaY < 0) {
            prev()
        }
    }

    return (
        <>
            <Canvas
                // flat
                // shadows
                gl={{
                    toneMapping: THREE.ACESFilmicToneMapping,
                    // toneMappingExposure: 0.8
                }}
                camera={{
                    fov: 45,
                    near: 0.01,
                }}
                onWheel={scrollHandler}
            >
                <Experience />
            </Canvas>
        </>
    )
})

Map.displayName = 'Map'
export default Map;
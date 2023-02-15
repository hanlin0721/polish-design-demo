import { Canvas } from '@react-three/fiber'
import Experience from '../../components/Maps/Experience.js'
import { memo, useMemo } from 'react'
import useControl from "../../store/useControl.js";
import _ from 'lodash';
import * as THREE from 'three'

const Map = memo(() => {
    const nextScene = useControl((state) => state.nextScene)
    const prevScene = useControl((state) => state.prevScene)

    const scrollHandler = (e) => {
        if (e.deltaY > 0) {
            nextScene()
        }
        if (e.deltaY < 0) {
            prevScene()
        }
    }

    const onWheelDebounce = useMemo(() => _.debounce(scrollHandler, 300, { leading: true, trailing: false }), [])

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
                onWheel={onWheelDebounce}
            >
                <Experience />
            </Canvas>
        </>
    )
})

Map.displayName = 'Map'
export default Map;
import { Canvas } from '@react-three/fiber'
import Experience from '../../components/Maps/Experience.js'
import { memo, useState, useEffect } from 'react'
import useControl from "../../store/useControl.js";
import _ from 'lodash';
import * as THREE from 'three'
import { useTouch } from '../../utils/useTouch.js'

const Map = memo(() => {

    const nextScene = useControl((state) => state.nextScene)
    const prevScene = useControl((state) => state.prevScene)

    // useEffect(() => {
    //     const unsubscribeReset = useControl.subscribe(
    //         (state) => state.scene,
    //         (value) => {
    //             console.log(value)
    //             // if (value === 1) {
    //             //     setScene(() => 1)
    //             // }
    //             if (value === 2) {
    //                 setScene(() => 2)
    //             }
    //             // if (value === 3) {
    //             //     setScene(() => 3)
    //             // }
    //         }
    //     )

    //     return () => {
    //         unsubscribeReset()
    //     }
    // }, [])

    const next = _.debounce(function () {
        nextScene()
    }, 1000, {
        leading: true,
        trailing: false
    })

    const prev = _.debounce(function () {
        prevScene()
    }, 1000, {
        leading: true,
        trailing: false
    })

    const scrollHandler = (e) => {
        if (e.deltaY > 0) {
            next()
        }
        if (e.deltaY < 0) {
            prev()
        }
    }

    const { swipeStart, swipeEnd } = useTouch(next)

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
                onTouchStart={swipeStart}
                // onMouseDown={(e) => { console.log(e) }}
                // onMouseUp={swipeEnd}
                onTouchEnd={swipeEnd}
                onWheel={scrollHandler}
            >
                <Experience />
            </Canvas>
        </>
    )
})

Map.displayName = 'Map'
export default Map;
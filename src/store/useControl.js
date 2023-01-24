import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        scene: 1,
        scenes: {
            'LOOKING_BLUE_POLISH_MAN': 1,
            'LOOKING_FLOATING_BLUE_POLISH_MAN': 2,
            'LOOKING_CSO': 3,
            'LOOKING_RAW_N_FRESH': 4,
            'LOOKING_FOUR_DESIRE': 5,
        },
        scroll: 0,
        nextScene: () => {
            set((state) => {
                // if (state.scene === 3) {
                //     return {
                //         scene: 3
                //     }
                // }
                return {
                    scene: state.scene + 1
                }
            })
        },
        prevScene: () => {
            set((state) => {
                if (state.scene === 1) {
                    return {
                        scene: 1
                    }
                }
                return {
                    scene: state.scene - 1
                }
            })
        },
        goScene: (value) => {
            set(() => {
                return {
                    scene: value
                }
            })
        },
        updateScroll: (value) => {
            set(() => {
                return {
                    scroll: value
                }
            })
        }
    }
}))
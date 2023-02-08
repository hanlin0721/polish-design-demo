import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        scene: '1',
        scenes: {
            'LOOKING_BLUE_POLISH_MAN': '1',
            'LOOKING_FLOATING_BLUE_POLISH_MAN': '2',
            'LOOKING_PORTFOLIO': '3',
        },
        scroll: 0,
        nextScene: () => {
            set((state) => {
                let scene = state.scenes.LOOKING_BLUE_POLISH_MAN
                if (state.scene === state.scenes.LOOKING_BLUE_POLISH_MAN) {
                    scene = state.scenes.LOOKING_FLOATING_BLUE_POLISH_MAN
                }

                if (state.scene === state.scenes.LOOKING_FLOATING_BLUE_POLISH_MAN) {
                    scene = state.scenes.LOOKING_PORTFOLIO
                }

                return {
                    scene: scene
                }
            })
        },
        prevScene: () => {
            set((state) => {
                let scene = state.scenes.LOOKING_BLUE_POLISH_MAN

                if (state.scene === state.scenes.LOOKING_FLOATING_BLUE_POLISH_MAN) {
                    scene = state.scenes.LOOKING_BLUE_POLISH_MAN
                }

                if (state.scene === state.scenes.LOOKING_PORTFOLIO) {
                    scene = state.scenes.LOOKING_FLOATING_BLUE_POLISH_MAN
                }

                return {
                    scene: scene
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
import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        scene: 1,
        nextScene: () => {
            set((state) => {
                if (state.scene === 3) {
                    return {
                        scene: 3
                    }
                }
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
    }
}))
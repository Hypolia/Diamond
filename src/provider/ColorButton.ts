import {onMounted, reactive, toRefs} from "vue";



export enum Colors {
    GREEN,
    BLUE,
    YELLOW,
}

type colorType = {
    color1: string[],
    color2: string[]
}

export function useColor (color: Colors) {
    const state = reactive<colorType>({
        color1: [],
        color2: []
    })

    onMounted(async () => {
        setColor(color)
    })

    function setColor (color: Colors) {
        switch (color) {
            case Colors.BLUE:
                state.color1 = []
                state.color2 = []
                break
            case Colors.GREEN:
                state.color1 = []
                state.color2 = []
                break
            case Colors.YELLOW:
                state.color1 = ['#f3ff4a', '#899205']
                state.color2 = ['#a2ac15', '#c9d42c']
                break
        }
    }

    return {
        ...toRefs(state),
        setColor,
        state
    }


}


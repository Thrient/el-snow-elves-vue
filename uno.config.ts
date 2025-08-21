import {defineConfig} from 'unocss'
import presetUno from '@unocss/preset-uno'
import elUno from "./types/el-uno.d";

export default defineConfig({
    presets: [
        presetUno(),
        elUno(
            {
                prefix: 'el-'
            }
        )
    ],
})
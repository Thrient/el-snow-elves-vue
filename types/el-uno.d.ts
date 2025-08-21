import {Preset} from 'unocss'

export default function elUno(options: { prefix?: string }): Preset {
    return {
        name: 'el-uno',
        rules: [
            ['bg-white-smoke', {'background-color': '#F5F5F5'}],
        ],

        prefix: options.prefix,
    }
}
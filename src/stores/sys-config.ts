/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/23 13:14
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/23 13:14
 */
import {defineStore} from "pinia";

export interface SysConfigStateInterface {
    configurationList: string[],
    isInit: boolean,
}

export const useSysConfig = defineStore('sysConfigStore', {
    state: (): SysConfigStateInterface => ({
        configurationList: []
    }),
    getters: {
        getIsInit(state): boolean {
            return state.isInit
        },
        getConfigurationList(state): string[] {
            return state.configurationList
        }
    },
    actions: {
        async init() {
            const result = await window.pywebview.api.emit('API:CONFIG:LIST')
            await this.setConfigurationList(result)
            this.isInit = true
        },
        async setConfigurationList(configurationList: string[]) {
            this.configurationList = configurationList
        }
    },
    persist: {
        storage: sessionStorage,
    }
})
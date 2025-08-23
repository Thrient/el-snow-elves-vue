/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/23 13:14
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/23 13:14
 */
import {defineStore} from "pinia";
import {useTaskConfig} from "@/stores/task-config.ts";

export interface SysConfigStateInterface {
    currentConfiguration: string
    isInit: boolean,
}

export const useSysConfig = defineStore('sysConfigStore', {
    state: (): SysConfigStateInterface => ({
        currentConfiguration: '',
        isInit: false
    }),
    getters: {
        getSysConfig(state): SysConfigStateInterface {
            return {
                currentConfiguration: state.currentConfiguration,
            }
        },
        getIsInit(state): boolean {
            return state.isInit
        },
    },
    actions: {
        async init() {
            console.log('init')
            const taskConfigStore = useTaskConfig()

            const taskConfigList = await window.pywebview.api.emit('API:CONFIG:LIST')
            if (!taskConfigList.includes(this.currentConfiguration)) {
                this.currentConfiguration = taskConfigList[0]
            }

            await taskConfigStore.loadTaskConfig(await window.pywebview.api.emit('API:TASK:CONFIG:lOAD', this.currentConfiguration))

            this.isInit = true
        }
    },
    persist: [
        {
            pick: ['currentConfiguration'],
            storage: localStorage,
        },
        {
            pick: ['isInit'],
            storage: sessionStorage,
        }
    ]
})
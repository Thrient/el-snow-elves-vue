/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/28 18:14
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/28 18:14
 */
import {defineStore} from "pinia";
import {type executeList} from "@/types/task";

export interface TaskConfigStateInterface {
    executeList: executeList[],
    chivalryNameOrNumber: string,
    chivalryShoutCount: number
}

export const useTaskConfig = defineStore('taskConfigBreadcrumb', {
    state: (): TaskConfigStateInterface => ({
        executeList: [],
        chivalryNameOrNumber: '',
        chivalryShoutCount: 1
    }),
    getters: {
        getTaskConfig(state): TaskConfigStateInterface {
            return {
                executeList: state.executeList,
                chivalryNameOrNumber: state.chivalryNameOrNumber,
                chivalryShoutCount: state.chivalryShoutCount
            }
        }
    },
    actions: {
        async addExecuteList(task: executeList) {
            this.executeList.push(task)
        },
        async removeExecuteList(task: executeList) {
            this.executeList = this.executeList.filter(item => item.data !== task.data)
        },
    },
    persist: {
        storage: sessionStorage,
    }
})
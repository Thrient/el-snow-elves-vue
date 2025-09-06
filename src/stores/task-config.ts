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
    chivalryShoutCount: number,
    silverNoteGiftBox: boolean,
    wuYueSwordBlank: boolean,
    baiGongDingBlank: boolean,
    ordinaryWorldShouts: boolean,
    connectedWorldShouts: boolean,
    worldShoutsText: string,
    keyList: string[],
    switchCharacterList: boolean[]
}

export const useTaskConfig = defineStore('taskConfigStore', {
    state: (): TaskConfigStateInterface => ({
        executeList: [],
        chivalryNameOrNumber: '',
        chivalryShoutCount: 1,
        silverNoteGiftBox: false,
        wuYueSwordBlank: false,
        baiGongDingBlank: false,
        ordinaryWorldShouts: false,
        connectedWorldShouts: false,
        worldShoutsText: '',
        keyList: [],
        switchCharacterList: []
    }),
    getters: {
        getTaskConfig(state): TaskConfigStateInterface {
            return {
                executeList: state.executeList,
                chivalryNameOrNumber: state.chivalryNameOrNumber,
                chivalryShoutCount: state.chivalryShoutCount,
                silverNoteGiftBox: state.silverNoteGiftBox,
                wuYueSwordBlank: state.wuYueSwordBlank,
                baiGongDingBlank: state.baiGongDingBlank,
                ordinaryWorldShouts: state.ordinaryWorldShouts,
                connectedWorldShouts: state.connectedWorldShouts,
                worldShoutsText: state.worldShoutsText,
                keyList: state.keyList,
                switchCharacterList: state.switchCharacterList
            }
        }
    },
    actions: {
        async loadTaskConfig(dict: any) {
            this.executeList = dict.executeList
            this.chivalryNameOrNumber = dict.chivalryNameOrNumber
            this.chivalryShoutCount = dict.chivalryShoutCount
            this.silverNoteGiftBox = dict.silverNoteGiftBox
            this.wuYueSwordBlank = dict.wuYueSwordBlank
            this.baiGongDingBlank = dict.baiGongDingBlank
            this.ordinaryWorldShouts = dict.ordinaryWorldShouts
            this.connectedWorldShouts = dict.connectedWorldShouts
            this.worldShoutsText = dict.worldShoutsText
            this.keyList = dict.keyList
            this.switchCharacterList = dict.switchCharacterList
        },
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
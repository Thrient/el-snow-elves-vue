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
    switchCharacterList: boolean[],
    worldShoutsCount: number,
    heroListCount: number,
    heroListInitiativeExit: boolean
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
        switchCharacterList: [],
        worldShoutsCount: 1,
        heroListCount: 1,
        heroListInitiativeExit: false
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
                switchCharacterList: state.switchCharacterList,
                worldShoutsCount: state.worldShoutsCount,
                heroListCount: state.heroListCount,
                heroListInitiativeExit: state.heroListInitiativeExit
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
            this.worldShoutsCount = dict.worldShoutsCount
            this.heroListCount = dict.heroListCount
            this.heroListInitiativeExit = dict.heroListInitiativeExit
        },
        async addExecuteList(task: executeList, index: number) {
            const isDuplicate = this.executeList.some(item => {
                // 根据实际情况定义"相同"的判断逻辑
                // 这里假设通过task的id属性判断是否相同
                return item.data === task.data
            });

            if (!isDuplicate) {
                this.executeList.splice(index, 0, task)
            }
        },
        async removeExecuteList(task: executeList) {
            this.executeList = this.executeList.filter(item => item.data !== task.data)
        },
    },
    persist: {
        storage: sessionStorage,
    }
})
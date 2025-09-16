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
    ordinaryWorldShouts: boolean,
    connectedWorldShouts: boolean,
    worldShoutsText: string,
    keyList: string[],
    switchCharacterList: boolean[],
    worldShoutsCount: number,
    heroListCount: number,
    heroListInitiativeExit: boolean,
    dailyExchangeList: string[],
    moneyTreeSelect: string,
    chefIngredientsTags: string[]
    chefSeasoningTags: string[]
    collectionMode: string
    collectionSwitch: number
    collectionCount: number,
    collectionMap: string,
    autoEatEgg: boolean,
    autoEatEggCount: number,
    autoBuyTool: boolean,
    collectionArticles: string,
    customCoordinatesTags: string[],
    swordFightInitiativeExit: boolean,
    swordFightCount: number
    merchantLakeCount: number,
    merchantLakeWordShout: string

}

export const useTaskConfig = defineStore('taskConfigStore', {
    state: (): TaskConfigStateInterface => ({
        executeList: [],
        chivalryNameOrNumber: '',
        chivalryShoutCount: 1,
        ordinaryWorldShouts: false,
        connectedWorldShouts: false,
        worldShoutsText: '',
        keyList: [],
        switchCharacterList: [],
        worldShoutsCount: 1,
        heroListCount: 1,
        heroListInitiativeExit: false,
        dailyExchangeList: [],
        moneyTreeSelect: '',
        chefIngredientsTags: [],
        chefSeasoningTags: [],
        collectionMode: '',
        collectionSwitch: 0,
        collectionCount: 1,
        collectionMap: '',
        autoEatEgg: false,
        autoEatEggCount: 1,
        autoBuyTool: false,
        collectionArticles: '',
        customCoordinatesTags: [],
        swordFightInitiativeExit: false,
        swordFightCount: 1,
        merchantLakeCount: 1,
        merchantLakeWordShout: '',

    }),
    getters: {
        getTaskConfig(state): TaskConfigStateInterface {
            return {
                executeList: state.executeList,
                chivalryNameOrNumber: state.chivalryNameOrNumber,
                chivalryShoutCount: state.chivalryShoutCount,
                ordinaryWorldShouts: state.ordinaryWorldShouts,
                connectedWorldShouts: state.connectedWorldShouts,
                worldShoutsText: state.worldShoutsText,
                keyList: state.keyList,
                switchCharacterList: state.switchCharacterList,
                worldShoutsCount: state.worldShoutsCount,
                heroListCount: state.heroListCount,
                heroListInitiativeExit: state.heroListInitiativeExit,
                dailyExchangeList: state.dailyExchangeList,
                moneyTreeSelect: state.moneyTreeSelect,
                chefIngredientsTags: state.chefIngredientsTags,
                chefSeasoningTags: state.chefSeasoningTags,
                collectionMode: state.collectionMode,
                collectionSwitch: state.collectionSwitch,
                collectionCount: state.collectionCount,
                collectionMap: state.collectionMap,
                autoEatEgg: state.autoEatEgg,
                autoEatEggCount: state.autoEatEggCount,
                autoBuyTool: state.autoBuyTool,
                collectionArticles: state.collectionArticles,
                customCoordinatesTags: state.customCoordinatesTags,
                swordFightInitiativeExit: state.swordFightInitiativeExit,
                swordFightCount: state.swordFightCount,
                merchantLakeCount: state.merchantLakeCount,
                merchantLakeWordShout: state.merchantLakeWordShout
            }
        }
    },
    actions: {
        async loadTaskConfig(dict: any) {
            this.executeList = dict.executeList
            this.chivalryNameOrNumber = dict.chivalryNameOrNumber
            this.chivalryShoutCount = dict.chivalryShoutCount
            this.ordinaryWorldShouts = dict.ordinaryWorldShouts
            this.connectedWorldShouts = dict.connectedWorldShouts
            this.worldShoutsText = dict.worldShoutsText
            this.keyList = dict.keyList
            this.switchCharacterList = dict.switchCharacterList
            this.worldShoutsCount = dict.worldShoutsCount
            this.heroListCount = dict.heroListCount
            this.heroListInitiativeExit = dict.heroListInitiativeExit
            this.dailyExchangeList = dict.dailyExchangeList
            this.moneyTreeSelect = dict.moneyTreeSelect
            this.chefIngredientsTags = dict.chefIngredientsTags
            this.chefSeasoningTags = dict.chefSeasoningTags
            this.collectionMode = dict.collectionMode
            this.collectionSwitch = dict.collectionSwitch
            this.collectionCount = dict.collectionCount
            this.collectionMap = dict.collectionMap
            this.autoEatEgg = dict.autoEatEgg
            this.autoEatEggCount = dict.autoEatEggCount
            this.autoBuyTool = dict.autoBuyTool
            this.collectionArticles = dict.collectionArticles
            this.customCoordinatesTags = dict.customCoordinatesTags
            this.swordFightInitiativeExit = dict.swordFightInitiativeExit
            this.swordFightCount = dict.swordFightCount
            this.merchantLakeCount = dict.merchantLakeCount
            this.merchantLakeWordShout = dict.merchantLakeWordShout
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
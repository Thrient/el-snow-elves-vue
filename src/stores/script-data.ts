/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/11 13:02
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/11 13:02
 */

import {defineStore} from "pinia";
import type {characterTable, logs} from "@/types/task.ts";

interface ScriptDataStateInterface {
    characterTables: characterTable[],
    logsList: logs[]
}


export const useScriptData = defineStore('scriptDataStore', {
    state: (): ScriptDataStateInterface => ({
        characterTables: [],
        logsList: []
    }),
    getters: {
        getCharacterTables(state): characterTable[] {
            return state.characterTables
        },
        getLogsList(state): logs[] {
            return state.logsList
        }
    },
    actions: {
        async updateCharacterTables(data: characterTable) {
            if (data.hwnd === undefined) {
                return
            }

            const index = this.characterTables.findIndex(item => item.hwnd === data.hwnd)

            if (index === -1) {
                return
            }

            if (data.character) {
                this.characterTables[index].character = data.character
            }
            if (data.state) {
                this.characterTables[index].state = data.state
            }
        },
        async addCharacterTables(data: characterTable) {
            this.characterTables.push(data)
        },
        async deleteCharacterTables(hwnd: number) {
            const index = this.characterTables.findIndex(item => item.hwnd === hwnd)
            if (index !== -1) {
                this.characterTables.splice(index, 1)
            }
        },
        async updateLogsList(data: logs) {
            this.logsList.unshift(data)
            this.logsList.length = Math.min(this.logsList.length, 1000)
        },
    },
    persist: {
        storage: sessionStorage,
    }
})
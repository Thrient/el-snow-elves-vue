/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/5 15:15
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/5 15:15
 */

import {
    type ComponentInternalInstance,
    computed,
    getCurrentInstance,
    onUnmounted,
    onMounted,
    ref
} from 'vue';
import {type characterTable} from "@/types/task.ts";
import {useTaskConfig} from "@/stores/task-config.ts";
import {useScriptData} from "@/stores/script-data.ts";

export default function () {

    const {appContext} = getCurrentInstance() as ComponentInternalInstance

    const tableRef = ref<HTMLElement>()

    const tableHeight = ref(0)

    const taskConfigStore = useTaskConfig()

    const scriptDataStore = useScriptData()

    const characterTables = computed(() => {
        return scriptDataStore.getCharacterTables
    })

    /**
     * 启动任务执行
     * 通过pywebview向Python后端发送启动脚本执行的指令，并传递当前任务配置
     */
    const start = async () => {
        window.pywebview.api.emit('API:SCRIPT:START', taskConfigStore.getTaskConfig)
    }

    /**
     * 解除绑定角色窗口
     * @param data 包含窗口句柄的角色数据对象
     */
    const unbind = async (data: characterTable) => {
        window.pywebview.api.emit('API:SCRIPT:UNBIND', data.hwnd)
        await scriptDataStore.deleteCharacterTables(data.hwnd)
    }

    /**
     * 停止角色脚本执行
     * @param data 包含窗口句柄的角色数据对象
     */
    const stop = async (data: characterTable) => {
        window.pywebview.api.emit('API:SCRIPT:STOP', data.hwnd)
    }

    /**
     * 恢复角色脚本执行
     * @param data 包含窗口句柄的角色数据对象
     */
    const resume = async (data: characterTable) => {
        window.pywebview.api.emit('API:SCRIPT:RESUME', data.hwnd)
    }

    /**
     * 更新表格高度
     * 根据tableRef元素的实际高度计算并设置表格显示高度，预留10px的间距
     */
    const updateHeight = () => {
        if (tableRef.value) {
            const height = tableRef.value.clientHeight
            tableHeight.value = height - 10
        }
    }


    /**
     * 更新角色数据
     * @param data - 包含角色信息的数据对象
     */
    const updateCharacter = async (data: characterTable) => {
        await scriptDataStore.updateCharacterTables(data)
    }

    /**
     * 添加角色数据到存储中
     * @param data - 要添加的角色表格数据
     */
    const addCharacter = async (data: characterTable) => {
        // 将角色数据添加到脚本数据存储中
        await scriptDataStore.addCharacterTables(data)
    }


    onMounted(() => {
        console.log('useCharacterTable mounted')
        updateHeight()
        window.addEventListener('resize', updateHeight)
        appContext.config.globalProperties.$mitt.on('API:UPDATE:CHARACTER', updateCharacter)
        appContext.config.globalProperties.$mitt.on('API:ADD:CHARACTER', addCharacter)
    })

    onUnmounted(() => {
        console.log('useCharacterTable unmounted')
        window.removeEventListener('resize', updateHeight)
        appContext.config.globalProperties.$mitt.off('API:UPDATE:CHARACTER', updateCharacter)
        appContext.config.globalProperties.$mitt.off('API:ADD:CHARACTER', addCharacter)
    })

    return {
        characterTables,
        tableRef,
        tableHeight,
        taskConfigStore,
        start,
        unbind,
        stop,
        resume
    }


}
/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/9 16:56
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/9 16:56
 */
import {
    type ComponentInternalInstance,
    getCurrentInstance,
    onMounted,
    onBeforeUnmount,
    ref,
    computed
} from 'vue'
import {type logs} from "@/types/task.ts";
import {useScriptData} from "@/stores/script-data.ts";
import type {TableInstance} from "element-plus";

export default function () {

    const scriptData = useScriptData()

    const logList = computed(() => {
        return scriptData.getLogsList
    })

    const {appContext} = getCurrentInstance() as ComponentInternalInstance

    const tableRef = ref<HTMLElement>()

    const logTableRef = ref<TableInstance>()

    const tableHeight = ref(0)

    const addLog = async (data: logs) => {
        await scriptData.updateLogsList(data)
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

    onMounted(() => {
        updateHeight()
        window.addEventListener('resize', updateHeight)
        appContext.config.globalProperties.$mitt.on('API:ADD:LOGS', addLog)

    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateHeight)
        appContext.config.globalProperties.$mitt.off('API:ADD:LOGS', addLog)
    })

    return {
        logList,
        tableRef,
        logTableRef,
        tableHeight,
        addLog
    }
}
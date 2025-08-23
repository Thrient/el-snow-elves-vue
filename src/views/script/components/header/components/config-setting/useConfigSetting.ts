/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/21 18:51
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/21 18:51
 */
import {useTaskConfig} from "@/stores/task-config.ts";
import {computed, ref} from "vue";
import {useSysConfig} from "@/stores/sys-config.ts";

export default function () {

    const sysConfigStore = useSysConfig()

    const taskConfigStore = useTaskConfig()

    const dialogVisible = ref(false)

    const configurationList = computed(() => sysConfigStore.getConfigurationList)


    const getTaskConfig = () => {
        return taskConfigStore.getTaskConfig
    }

    /**
     * 保存配置信息
     * @param value 需要保存的配置值
     * @returns 无返回值
     */
    const saveConfig = async (value: string) => {
        // 向Python后端发送配置保存事件，传递配置值和任务配置信息
        window.pywebview.api.emit('API:CONFIG:SAVE', value, getTaskConfig())
    }


    const showDialog = async () => {
        dialogVisible.value = true
    }

    return {
        dialogVisible,
        configurationList,
        getTaskConfig,
        saveConfig,
        showDialog
    }


}
/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/21 18:51
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/21 18:51
 */
import {useTaskConfig} from "@/stores/task-config.ts";
import {onMounted, ref} from "vue";
import {useSysConfig} from "@/stores/sys-config.ts";

export default function () {

    const sysConfigStore = useSysConfig()

    const taskConfigStore = useTaskConfig()

    const saveDialogVisible = ref(false)

    const deleteDialogVisible = ref(false)

    const configurationList = ref([])

    /**
     * 获取配置列表
     *
     * 该函数通过pywebview API调用后端接口获取配置列表数据，
     * 并将返回结果赋值给configurationList响应式变量
     *
     * @returns {Promise<void>} 无返回值的异步函数
     */
    const getConfigurationList = async () => {
        configurationList.value = await window.pywebview.api.emit('API:TASK:CONFIG:LIST')
    }

    /**
     * 获取任务配置信息
     * @param value 传入的参数值，用于标识需要加载的任务配置
     * @returns 无返回值的异步函数
     */
    const getTaskConfiguration = async (value: any) => {
        // 调用Python后端API加载任务配置数据
        const result = await window.pywebview.api.emit('API:TASK:CONFIG:lOAD', value)
        // 将获取到的配置数据加载到任务配置存储中
        await taskConfigStore.loadTaskConfig(result)
    }


    /**
     * 保存配置信息
     * @param value 需要保存的配置值
     * @returns 无返回值
     */
    const saveConfig = async (value: string) => {
        // 向Python后端发送配置保存事件，传递配置值和任务配置信息
        window.pywebview.api.emit('API:TASK:CONFIG:SAVE', value, taskConfigStore.getTaskConfig)
        await getConfigurationList()
        await sysConfigStore.updateCurrentConfiguration()
    }

    const deleteConfig = async (value: string) => {
        // 向Python后端发送配置删除事件，传递配置值
        window.pywebview.api.emit('API:TASK:CONFIG:DELETE', value)
        await getConfigurationList()
        await sysConfigStore.updateCurrentConfiguration()
    }


    /**
     * 组件挂载时的初始化函数
     * 在组件挂载完成后执行，用于获取配置列表数据
     * 无参数
     * 无返回值
     */
    onMounted(async () => {
        // 组件挂载后获取配置列表数据
        await getConfigurationList()

    })


    return {
        saveDialogVisible,
        deleteDialogVisible,
        configurationList,
        sysConfigStore,
        getTaskConfiguration,
        saveConfig,
        deleteConfig
    }


}
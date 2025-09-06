/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/9/2 18:33
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/2 18:33
 */
import {useTaskConfig} from "@/stores/task-config.ts";


export default function () {
    const taskConfigStore = useTaskConfig()

    const handleKeydown = (e: any, index: number) => {
        e.preventDefault()
        taskConfigStore.keyList[index] = e.code
            .replace(/^Key/, '')
            .replace(/^Digit/, '')
            .toUpperCase()
    }

    return {
        taskConfigStore,
        handleKeydown
    }
}
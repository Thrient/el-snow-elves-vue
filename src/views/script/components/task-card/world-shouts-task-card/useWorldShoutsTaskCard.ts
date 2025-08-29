/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/29 14:30
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/29 14:30
 */
import {useTaskConfig} from "@/stores/task-config.ts";


export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
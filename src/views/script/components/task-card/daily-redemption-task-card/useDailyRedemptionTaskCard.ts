/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/25 12:10
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/25 12:10
 */
import {useTaskConfig} from "@/stores/task-config.ts";


export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
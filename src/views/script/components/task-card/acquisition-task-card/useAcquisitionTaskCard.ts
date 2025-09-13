/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/9/13 10:48
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/13 10:48
 */
import {useTaskConfig} from "@/stores/task-config.ts";

export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/21 15:40
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/21 15:40
 */
import {useTaskConfig} from "@/stores/task-config.ts";


export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/9/8 15:25
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/8 15:25
 */

import {useTaskConfig} from "@/stores/task-config.ts";

export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
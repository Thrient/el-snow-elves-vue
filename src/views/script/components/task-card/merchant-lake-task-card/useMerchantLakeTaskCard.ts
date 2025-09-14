/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/9/14 14:12
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/14 14:12
 */

import {useTaskConfig} from "@/stores/task-config.ts";

export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
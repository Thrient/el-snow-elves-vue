/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/9/14 10:17
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/14 10:17
 */

import {useTaskConfig} from "@/stores/task-config.ts";

export default function () {

    const taskConfigStore = useTaskConfig()

    return {
        taskConfigStore
    }
}
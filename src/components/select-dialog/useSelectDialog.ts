/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/8/23 10:16
 * @LastEditors: thrient
 * @LastEditTime: 2025/8/23 10:16
 */
import {ref} from 'vue'

export default function (model: any, emit: any) {

    const value = ref<string>('')

    /**
     * 处理确认操作的回调函数
     *
     * 该函数用于处理用户的确认操作，首先关闭模态框，然后触发confirm事件并传递当前值
     */
    const handleConfirm = () => {
        // 关闭模态框
        model.value = false
        // 触发confirm事件并传递当前值
        emit('confirm', value.value)
    }


    return {
        value,
        handleConfirm,
    }


}
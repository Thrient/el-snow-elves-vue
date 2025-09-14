/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/9/14 14:45
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/14 14:45
 */
import {ref} from 'vue';
import type {characterTable} from "@/types/task.ts";

export default function () {

    const transparent = ref(255)

    /**
     * 截图函数
     * @param data - 包含窗口句柄信息的角色表格数据
     * @returns 无返回值的异步函数
     */
    const screenshot = async (data: characterTable) => {
        // 调用Python Webview API执行截图操作
        window.pywebview.api.emit('API:SCRIPT:SCREENSHOT', data.hwnd)
    }

    /*
     * 锁定窗口
     * @param data - 窗口数据对象
     * @param data.hwnd - 窗口句柄
     * @returns void
     */
    const lock = async (data: characterTable) => {
        /* 调用Python Webview API执行截图操作 */
        window.pywebview.api.emit('API:SCRIPT:LOCK', data.hwnd)
    }

    /*
     * 解锁窗口
     * @param data - 窗口数据对象
     * @param data.hwnd - 窗口句柄
     * @returns void
     */
    const unlock = async (data: characterTable) => {
        /* 调用Python Webview API执行截图操作 */
        window.pywebview.api.emit('API:SCRIPT:UNLOCK', data.hwnd)
    }

    /*
     * 设置窗口透明度
     * @param data - 窗口数据对象
     * @param data.hwnd - 窗口句柄
     * @returns void
     */
    const changeTransparent = async (data: characterTable) => {
        /* 调用Python Webview API执行窗口透明度设置 */
        window.pywebview.api.emit('API:SCRIPT:SET_TRANSPARENT', data.hwnd, transparent.value)
    }

    return {
        transparent,
        screenshot,
        lock,
        unlock,
        changeTransparent
    }
}
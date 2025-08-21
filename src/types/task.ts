/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/28 18:34
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/28 18:34
 */

/**
 * 用于描述执行列表的数据结构
 * @property {string} data - 包含执行相关的数据信息
 */
export interface executeList {
    data: string,
    card: string
}

export interface characterTable {
    character: string | undefined,
    state: string,
    hwnd: number
}

export interface logs {
    time: string
    info: string
    data: string
}

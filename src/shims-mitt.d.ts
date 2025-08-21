/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/24 15:18
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/24 15:18
 */

import mitt from 'mitt';

declare module 'vue/types/vue' {
    interface Vue {
        $mitt: ReturnType<typeof mitt>;
    }
}

declare global {
    interface Window {
        $mitt: ReturnType<typeof mitt>;
    }
}
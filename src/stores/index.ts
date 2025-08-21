/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/28 18:24
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/28 18:24
 */

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia()
store.use(piniaPluginPersistedstate);
export { store }
import {createRouter, createWebHistory} from 'vue-router'
import {useSysConfig} from "@/stores/sys-config.ts";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '/',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/home/AppHome.vue'),
                },
                {
                    path: '/script',
                    name: 'script',
                    component: () => import('@/views/script/AppScript.vue'),
                    children: [
                        {
                            path: 'chivalry-task-card',
                            name: 'chivalry-task-card',
                            component: () => import('@/views/script/components/task-card/chivalry-task-card/ChivalryTaskCard.vue'),
                        },
                    ]
                },
                {
                    path: '/run',
                    name: 'run',
                    component: () => import('@/views/run/AppRun.vue'),
                }
            ]
        }

    ],
})

router.beforeEach(async (to, from) => {
    const sysConfigStore = useSysConfig()
    if (!sysConfigStore.getIsInit) {
        await sysConfigStore.init()
    }
    return true
})

export default router

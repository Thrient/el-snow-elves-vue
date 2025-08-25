/**
 * @Description:
 * @Author: thrient
 * @Date: 2025/7/26 13:58
 * @LastEditors: thrient
 * @LastEditTime: 2025/7/26 13:58
 */
import {ref, onMounted, onBeforeUnmount} from "vue";
import {useTaskConfig} from "@/stores/task-config.ts";
import router from "@/router";

export default function () {

    const listRef = ref<HTMLElement>()

    const taskConfigStore = useTaskConfig()

    const tableHeight = ref(0)

    const tableData = ref([
        {
            data: '课业任务',
            card: ''
        },
        {
            data: '帮派任务',
            card: ''
        },
        {
            data: '门客设宴',
            card: ''
        },
        {
            data: '破阵设宴',
            card: ''
        },
        {
            data: '单人论剑',
            card: ''
        },
        {
            data: '侠缘喊话',
            card: '/script/chivalry-task-card'
        },
        {
            data: '每日兑换',
            card: '/script/daily-redemption-task-card'
        },
        {
            data: '江湖急送',
            card: ''
        },

    ])

    /**
     * 导航到指定路径的异步函数
     * @param row 包含导航路径信息的对象，必须具有card属性
     * @returns Promise<void> 无返回值的异步操作
     */
    const navigate = async (row: any) => {
        // 如果card路径为空字符串，则直接返回不执行导航
        if (row.card === '') {
            return
        }
        await router.push(row.card)
    }


    /**
     * 添加任务配置到执行列表
     * @param row 任务配置数据行
     */
    const add = async (row: any) => {
        await taskConfigStore.addExecuteList(row)
    }


    /**
     * 移除任务配置项
     * @param row - 要移除的任务配置数据行
     * @returns Promise<void> - 异步操作，无返回值
     */
    const remove = async (row: any) => {
        await taskConfigStore.removeExecuteList(row)
    }


    /**
     * 更新表格高度
     *
     * 该函数用于计算并设置表格的高度值。通过获取列表容器的客户端高度，
     * 减去10像素的偏移量来确定最终的表格高度。
     *
     * @remarks
     * - 需要确保listRef引用的DOM元素存在
     * - 表格高度为列表容器高度减去10像素
     */
    const updateHeight = () => {
        // 检查列表引用是否存在
        if (listRef.value) {
            // 获取列表容器的高度并计算表格高度
            const height = listRef.value.clientHeight
            tableHeight.value = height - 10
        }
    }

    onMounted(() => {
        updateHeight()
        window.addEventListener('resize', updateHeight)

    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateHeight)
    })

    return {
        listRef,
        tableHeight,
        tableData,
        taskConfigStore,
        add,
        remove,
        navigate
    }
}


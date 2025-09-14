<!--
 * @Description: 
 * @Author: thrient
 * @Date: 2025/9/14 14:45
 * @LastEditors: thrient
 * @LastEditTime: 2025/9/14 14:45
-->
<template>
  <el-popover
      placement="right"
      :width="280"
      trigger="click"
  >
    <template #reference>
      <el-button size="small" type="success">其他</el-button>
    </template>
    <template #default>
      <el-button @click="lock(props.data)" size="small">锁定</el-button>
      <el-button @click="unlock(props.data)" size="small">解锁</el-button>
      <el-button @click="screenshot(props.data)" size="small">截图</el-button>
      <el-popover
          placement="top"
          :width="250"
          trigger="hover"
      >
        <template #reference>
          <el-button size="small">透明度</el-button>
        </template>
        <template #default>
          <div>
            <el-slider :min="0" :max="255" @change="changeTransparent(props.data)" v-model="transparent" :step="5"/>
          </div>
        </template>
      </el-popover>

    </template>
  </el-popover>
</template>

<script setup lang="ts">
import useOtherOperations from "@/views/run/components/other-operations/useOtherOperations.ts";
import type {characterTable} from "@/types/task.ts";

const props = defineProps({
  data: {
    type: Object as () => characterTable,
    required: true
  }
})

const {transparent, screenshot, changeTransparent, unlock, lock} = useOtherOperations()


</script>

<style scoped>

</style>